import { types } from "../types/types";

const initialState = {
  loading: false,
  data: null,
  msgError: null,
};

export default function forecastReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case types.FETCH_FORECAST_REQUEST:
      return {
        ...state,
        loading: true,
        data: null,
        msgError: null,
      };

    case types.FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case types.FETCH_FORECAST_FAILURE:
      return {
        ...state,
        loading: false,
        msgError: payload,
      };

    case type.REMOVE_FORECAST_DATA:
      return {
        ...state,
        data: null,
      };

    default:
      return state;
  }
}
