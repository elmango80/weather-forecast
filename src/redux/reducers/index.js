import { combineReducers } from "redux";

import authReducer from "./authReducer";
import forecastReducer from "./forecastReducer";
import municipalityReducer from "./municipalityReducer";
import uiReducer from "./uiReducer";
import userReducer from "./favoriteReducer";

export default combineReducers({
  auth: authReducer,
  favorite: userReducer,
  forecast: forecastReducer,
  municipality: municipalityReducer,
  ui: uiReducer,
});
