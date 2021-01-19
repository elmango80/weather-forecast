import { types } from "../types/types";

const initialState = {
  loading: true,
  msgError: null,
};

export default function uiReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_ERROR:
      return {
        ...state,
        msgError: payload,
      };

    case types.REMOVE_ERROR:
      return {
        ...state,
        msgError: null,
      };

    case types.STAR_LOADING:
      return {
        ...state,
        loading: true,
      };

    case types.FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
