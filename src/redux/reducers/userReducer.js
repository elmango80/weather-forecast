import _ from "lodash";
import { types } from "../types/types";

const initialState = {
  favorites: {
    municipalities: {},
  },
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
          municipalities: {
            ...state.favorites.municipalities,
            ...payload,
          },
        },
      };

    case types.DELETE_FAVORITE:
      return {
        ...state,
        favorites: {
          municipalities: _.omit(state.favorites.municipalities, payload),
        },
      };

    default:
      return state;
  }
}
