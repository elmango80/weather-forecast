import _ from "lodash";
import { types } from "../types/types";

const initialState = {
  loading: false,
  forecasts: {},
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
        msgError: null,
      };

    case types.FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        loading: false,
        forecasts: {
          ...state.forecasts,
          [payload.key]: payload.data,
        },
      };

    case types.FETCH_FORECAST_FAILURE:
      return {
        ...state,
        loading: false,
        msgError: payload,
      };

    case types.REMOVE_FORECAST:
      return {
        ...state,
        forecasts: _.pick(state.forecasts, payload),
      };

    case types.CLEAR_FORECAST:
      return {
        ...state,
        forecasts: {},
      };

    default:
      return state;
  }
}
