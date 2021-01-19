import { combineReducers } from "redux";

import authReducer from "./authReducer";
import uiReducer from "./uiReducer";
import municipalityReducer from "./municipalityReducer";

export default combineReducers({
  municipality: municipalityReducer,
  auth: authReducer,
  ui: uiReducer,
});
