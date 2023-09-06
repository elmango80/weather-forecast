import { Provider } from "react-redux";

import { initialization as axiosInitialization } from "helpers/axiosHelper";
import { store } from "redux/store";
import AppRouter from "routers";

import "@elastic/eui/dist/eui_theme_light.css";
import "./App.css";

axiosInitialization();

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
