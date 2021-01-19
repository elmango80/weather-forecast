import { types } from "../types/types";

const initialState = {
  loading: false,
  list: [],
  msgError: null,
};

export default function municipalityReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case types.FETCH_MUN_REQUEST:
      return {
        ...state,
        loading: true,
        list: [],
        msgError: null,
      };

    case types.FETCH_MUN_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload,
      };

    case types.FETCH_MUN_FAILURE:
      return {
        ...state,
        loading: false,
        msgError: payload,
      };

    default:
      return state;
  }
}
