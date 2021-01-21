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

  //FORECAST types
  FETCH_FORECAST_REQUEST: "[FCST] Fetch forecast request",
  FETCH_FORECAST_SUCCESS: "[FCST] Fetch forecast success",
  FETCH_FORECAST_FAILURE: "[FCST] Fetch forecast failure",
  REMOVE_FORECAST: "[FCST] Remove forecast",
  CLEAR_FORECAST: "[FCST] Clear forecast",

  //FAVORITES types
  GET_FAVORITES: "[FAV] Get user favorites",
  ADD_FAVORITE: "[FAV] Add a user favorite",
  DELETE_FAVORITE: "[FAV] Remove a user favorite",
};
