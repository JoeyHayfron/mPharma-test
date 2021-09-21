import { combineReducers } from "redux";
import uiReducer from "./ui";
import appReducer from "./app";

export const rootReducer = combineReducers({
  ui: uiReducer,
  app: appReducer,
});
