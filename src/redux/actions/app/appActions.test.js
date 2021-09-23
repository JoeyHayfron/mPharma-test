import React from "react";
import { waitFor } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";
import { addEntityAsync, deleteEntityAsync, editEntityAsync } from ".";
import localforage from "localforage";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("app actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      entities: {
        prices: {
          1: {
            id: 1,
            price: 20,
            date: "2021-09-23T06:59:58+00:00",
          },
        },
        products: {
          1: {
            id: 1,
            name: "Citrizine",
            prices: [1],
          },
        },
      },
    });
    jest.mock("localforage");
    localforage.setItem("entities", store.getState().entities);
  });

  test("it should fire an add entity action", () => {
    store.dispatch(
      addEntityAsync({
        name: "Paracetamol",
        price: 20,
      })
    );
    expect(store.getActions()).toContainEqual({ type: "START_ADDING_ENTITY" });
  });

  describe("it saves new entity and updates state", () => {
    beforeEach(() =>
      store.dispatch(
        addEntityAsync({
          name: "Paracetamol",
          price: 20,
        })
      )
    );

    test("it dispatch an add entity success action and update cache", async () => {
      const actions = store.getActions();
      expect(actions[1].type).toBe("ADD_ENTITY_SUCCESS");
      let ent = await waitFor(() => localforage.getItem("entities"));
      expect(ent.products[2].name).toBe("Paracetamol");
    });

    test("it edits a product name", async () => {
      await waitFor(() =>
        store.dispatch(
          editEntityAsync({
            productId: 2,
            priceId: 2,
            name: "Para",
            price: 20,
          })
        )
      );
      let ent = await waitFor(() => localforage.getItem("entities"));
      expect(ent.products[2].name).toBe("Para");
    });

    test("it creates a new price for a product", async () => {
      await waitFor(() =>
        store.dispatch(
          editEntityAsync({
            productId: 2,
            priceId: 2,
            name: "Para",
            price: 30,
          })
        )
      );
      let ent = await waitFor(() => localforage.getItem("entities"));
      expect(ent.prices[3].price).toBe(30);
    });

    test("it deletes entity from the cache", async () => {
      await waitFor(() => store.dispatch(deleteEntityAsync(2)));
      let ent = await waitFor(() => localforage.getItem("entities"));
      expect(ent.products[2]).toBeUndefined();
    });
  });
});
