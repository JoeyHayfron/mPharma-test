import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { fetchEntitiesAsync } from "./redux/actions/app";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("ensures app component renders as it should", () => {
  beforeEach(() => {
    const initialState = {
      ui: {
        showModal: false,
      },
      app: {
        entities: undefined,
        errorMessage: undefined,
        isAdding: false,
      },
    };
    let store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App
          modalVisible={store.getState().ui.showModal}
          fetchEntitiesAsync={store.dispatch(fetchEntitiesAsync())}
        />
      </Provider>
    );
  });
  test("renders nav bar with add button", () => {
    expect(screen.getAllByText("mPharma Products List")).toHaveLength(1);
    expect(screen.getAllByText("Add Item")).toHaveLength(1);
  });

  test("it should render a products list component", () => {
    expect(screen.getByTestId("test_productsList")).toBeDefined();
  });
});
