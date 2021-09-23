import React from "react";
import { render, screen } from "@testing-library/react";
import ProductsList from "./productsList.jsx";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";

describe("it ensures the products list component renders without faults", () => {
  test("it should render a products list displaying one product", () => {
    const initialState = {
      entities: {
        prices: {
          1: {
            id: 1,
            price: 10,
            date: '"2019-01-01T17:16:32+00:00"',
          },
        },
        products: {
          1: {
            id: 1,
            name: "Paracetamol",
            prices: [1],
          },
        },
      },
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    render(
      <Provider store={store}>
        <ProductsList productList={store.getState().entities} />
      </Provider>
    );
    expect(screen.getAllByTestId("test_listItem")).toHaveLength(1);
  });

  test("it should not render any list item when entities is undefined", () => {
    const initialState = {
      entities: undefined,
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    render(
      <Provider store={store}>
        <ProductsList productList={store.getState().entities} />
      </Provider>
    );
    expect(screen.queryByText("Price")).not.toBeInTheDocument();
  });
});
