import React from "react";
import { Provider } from "react-redux";

import { store } from "redux/store";

import AppRouter from "routers";

import "@elastic/eui/dist/eui_theme_light.css";
import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
