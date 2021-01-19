import { combineReducers } from "redux";

import authReducer from "./authReducer";
import uiReducer from "./uiReducer";
import municipalityReducer from "./municipalityReducer";
import forecastReducer from "./forecastReducer";

export default combineReducers({
  auth: authReducer,
  forecast: forecastReducer,
  municipality: municipalityReducer,
  ui: uiReducer,
});
