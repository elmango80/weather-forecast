import { types } from "../types/types";
import { axios } from "helpers/axiosHelper";
import { normalizeData } from "helpers/forecastHelper";

const fetchForecastRequest = () => {
  return {
    type: types.FETCH_FORECAST_REQUEST,
  };
};

const fetchForecastSuccess = (data, key) => {
  return {
    type: types.FETCH_FORECAST_SUCCESS,
    payload: { data, key },
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
      .get(`/provincias/${provinceId}/municipios/${municipalityId.slice(0, 5)}`)
      .then((response) => {
        const data = normalizeData(response.data);

        dispatch(fetchForecastSuccess(data, municipalityId));
      })
      .catch((error) => {
        dispatch(
          fetchForecastFailure(
            "No se ha podido obtener el pronóstico del clima"
          )
        );

        console.error(error);
      });
  };
};

export const removeForecast = (paths) => {
  return (dispatch) => {
    dispatch({
      type: types.REMOVE_FORECAST,
      payload: paths,
    });
  };
};

export const clearForecast = () => {
  return (dispatch) => {
    dispatch({
      type: types.CLEAR_FORECAST,
    });
  };
};
