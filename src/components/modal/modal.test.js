import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from "./modal";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";

describe("it should render modal correctly", () => {
  test("it displays modal with add view when add button is clicked", () => {
    const initialState = {
      ui: {
        modalData: { action: "add-product", title: "Add Product" },
      },
      app: {
        errorMessage: undefined,
        isAdding: undefined,
        isEditing: undefined,
      },
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Modal show={true} modalData={store.getState().modalData} />
      </Provider>
    );
    expect(screen.getAllByText("Add Product")).toHaveLength(1);
  });

  test("it displays modal with edit view when edit button is clicked", () => {
    const initialState = {
      ui: {
        modalData: {
          action: "edit-product",
          title: "Edit Product",
          productId: 1,
          name: "Paracetamol",
          price: 20,
          priceId: 1,
        },
      },
      app: {
        errorMessage: undefined,
        isAdding: undefined,
        isEditing: undefined,
      },
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Modal show={true} modalData={store.getState().modalData} />
      </Provider>
    );
    expect(screen.getAllByText("Edit Product")).toHaveLength(1);
  });

  test("it displays modal with delete view when delete button is clicked", () => {
    const initialState = {
      ui: {
        modalData: {
          action: "delete-item",
          title: "Delete Product",
          body: `Are you sure you want to delete Paracetamol?`,
          entityId: 1,
        },
      },
      app: {
        errorMessage: undefined,
        isAdding: undefined,
        isEditing: undefined,
      },
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Modal show={true} modalData={store.getState().modalData} />
      </Provider>
    );
    expect(screen.getAllByText("Delete Product")).toHaveLength(1);
  });
});
