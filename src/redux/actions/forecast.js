import { types } from "../types/types";
import { axios } from "helpers/axiosHelper";
import { normalizeData } from "helpers/forecastHelper";

const fetchForecastRequest = () => {
  return {
    type: types.FETCH_FORECAST_REQUEST,
  };
};

const fetchForecastSuccess = (data) => {
  return {
    type: types.FETCH_FORECAST_SUCCESS,
    payload: data,
  };
};

const fetchForecastFailure = (msgError) => {
  return {
    type: types.FETCH_FORECAST_FAILURE,
    payload: msgError,
  };
};

export const getForecast = (provinceId, municipalityId) => {
  return (dispatch) => {
    dispatch(fetchForecastRequest());
    axios
      .get(`/provincias/${provinceId}/municipios/${municipalityId}`)
      .then((response) => {
        const data = normalizeData(response.data);
        dispatch(fetchForecastSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchForecastFailure(error.message));

        console.error("No se ha podido obtener el pronóstico del clima");
      });
  };
};

export const removeForecast = () => {
  return (dispatch) => {
    dispatch({ type: types.REMOVE_FORECAST_DATA });
  };
};
