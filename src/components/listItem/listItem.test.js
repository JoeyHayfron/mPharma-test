import React from "react";
import { render, screen } from "@testing-library/react";
import ListItem from "./listItem";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";

describe("it renders a list item correctly", () => {
  test("it should render a single list item with correct information", () => {
    const initialState = {
      ui: {
        modalData: undefined,
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
        <ListItem name="Paracetamol" price="20" id={1} priceId={1} />
      </Provider>
    );
    expect(screen.getAllByText("Paracetamol")).toHaveLength(1);
    expect(screen.getAllByText("Price: GHC 20")).toHaveLength(1);
    expect(screen.getAllByText("Edit")).toHaveLength(1);
    expect(screen.getAllByText("Delete")).toHaveLength(1);
  });
});
