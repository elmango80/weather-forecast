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
  GET_MUNICIPALITIES: "[DATA] Get municipalities",
  GET_MUNICIPALITY_FORECAST: "[DATA] Get municipality forecast",

  //USER types
  ADD_FAVORITE: "[USER] Add favorite",
  REMOVE_FAVORITE: "[USER] Remove favorite",
  RELOCATE_FAVORITE: "[USER] Relocate favorite",

  //API types
  FETCHING_DATA_START: "[API] Fetching data start",
  FETCHING_DATA_SUCCESS: "[API] Fetching data success",
  FETCHING_DATA_FAILURE: "[API] Fetching data failure",
};
