import _ from "lodash";
import { types } from "../types/types";

const initialState = {
  loading: false,
  favorites: {},
  msgError: null,
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_FAVORITES:
      return {
        ...state,
        favorites: payload,
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

    default:
      return state;
  }
}
