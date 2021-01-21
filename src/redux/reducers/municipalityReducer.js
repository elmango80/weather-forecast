import { types } from "../types/types";

const initialState = {
  loading: false,
  municipalities: null,
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
        municipalities: null,
        msgError: null,
      };

    case types.FETCH_MUN_SUCCESS:
      return {
        ...state,
        loading: false,
        municipalities: payload,
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
