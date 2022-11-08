import React from "react";
import { AppRoot } from "./ui/AppRoot";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const App = () => (
  <Provider store={store}>
    <AppRoot />
  </Provider>
);
