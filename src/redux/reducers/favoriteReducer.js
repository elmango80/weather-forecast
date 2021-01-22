import _ from "lodash";
import { types } from "../types/types";

const initialState = {
  loading: false,
  favorites: {},
  msgError: null,
};

// FETCH_FAVORITES_REQUEST: "[FAV] Fetch favorites request",
// FETCH_FAVORITES_SUCCESS: "[FAV] Fetch favorites success",
// FETCH_FAVORITES_FAILURE: "[FAV] Fetch favorites failure",
// ADD_FAVORITE: "[FAV] Add a favorite",
// DELETE_FAVORITE: "[FAV] Remove a favorite",
// UPDATE_FAVORITE: "[FAV] Update a favorite",
export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_FAVORITES_REQUEST:
      return {
        ...state,
        loading: true,
        msgError: null,
      };

    case types.FETCH_FAVORITES_SUCCESS:
      console.log(payload);
      return {
        ...state,
        loading: false,
        favorites: payload,
      };

    case types.FETCH_FAVORITES_FAILURE:
      return {
        ...state,
        loading: false,
        msgError: payload,
      };

    case types.ADD_FAVORITE:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          ...payload,
        },
      };

    case types.DELETE_FAVORITE:
      return {
        ...state,
        favorites: _.omit(state.favorites, payload),
      };

    case types.UPDATE_FAVORITE:
      return {
        ...state,
        favorites: payload,
      };

    default:
      return state;
  }
}
