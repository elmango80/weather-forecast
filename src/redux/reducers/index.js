import { combineReducers } from "redux";

import authReducer from "./authReducer";
import forecastReducer from "./forecastReducer";
import municipalityReducer from "./municipalityReducer";
import uiReducer from "./uiReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  forecast: forecastReducer,
  municipality: municipalityReducer,
  ui: uiReducer,
  user: userReducer,
});
