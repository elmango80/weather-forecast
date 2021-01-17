import React from "react";
import { Provider } from "react-redux";

import { store } from "redux/store";

import AppRouter from "routers";

import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
