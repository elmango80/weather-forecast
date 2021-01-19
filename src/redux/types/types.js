export const types = {
  //AUTH types
  LOGIN: "[AUTH] Login",
  LOGOUT: "[AUTH] Logout",

  //UI types
  SET_ERROR: "[UI] Set error",
  REMOVE_ERROR: "[UI] Remove error",
  STAR_LOADING: "[UI] Star loading",
  FINISH_LOADING: "[UI] Finish loading",

  //MUNICIPALITY types
  FETCH_MUN_REQUEST: "[MUN] Fetch municipalities request",
  FETCH_MUN_SUCCESS: "[MUN] Fetch municipalities success",
  FETCH_MUN_FAILURE: "[MUN] Fetch municipalities failure",

  //USER types
  ADD_FAVORITE: "[USER] Add favorite",
  REMOVE_FAVORITE: "[USER] Remove favorite",
  RELOCATE_FAVORITE: "[USER] Relocate favorite",

  //FORECAST types
  FETCH_FORECAST_REQUEST: "[FORECAST] Fetch forecast request",
  FETCH_FORECAST_SUCCESS: "[FORECAST] Fetch forecast success",
  FETCH_FORECAST_FAILURE: "[FORECAST] Fetch forecast failure",
  REMOVE_FORECAST_DATA: "[FORECAST] Remove forecast",
};
