import _ from "lodash";
import { types } from "../types/types";

const initialState = {
  loading: false,
  favorites: {},
  msgError: null,
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_FAVORITES_REQUEST:
      return {
        ...state,
        loading: true,
        msgError: null,
      };

    case types.FETCH_FAVORITES_SUCCESS:
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
