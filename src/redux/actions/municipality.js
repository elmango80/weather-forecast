import { types } from "../types/types";
import { axios } from "helpers/axiosHelper";

import { normalizeData } from "helpers/municipalityHelper";

const fetchMunicipalityRequest = () => {
  return {
    type: types.FETCH_MUN_REQUEST,
  };
};

const fetchMunicipalitySuccess = (data) => {
  return {
    type: types.FETCH_MUN_SUCCESS,
    payload: data,
  };
};

const fetchMunicipalityFailure = (msgError) => {
  return {
    type: types.FETCH_MUN_FAILURE,
    payload: msgError,
  };
};

export const getMunicipalities = () => {
  return (dispatch) => {
    dispatch(fetchMunicipalityRequest());
    axios
      .get("/municipios")
      .then((response) => {
        const data = normalizeData(response.data);

        dispatch(fetchMunicipalitySuccess(data));
      })
      .catch((error) => {
        dispatch(fetchMunicipalityFailure(error.message));

        console.error("No se ha podido obtener la lista de municipios");
      });
  };
};
