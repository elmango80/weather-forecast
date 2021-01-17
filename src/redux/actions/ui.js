import { types } from "../types/types";

export const setError = (message) => {
  return (dispatch) => {
    dispatch({
      type: types.SET_ERROR,
      payload: message,
    });
  };
};

export const removeError = () => {
  return (dispatch) => {
    dispatch({ type: types.REMOVE_ERROR });
  };
};

export const startLoading = () => {
  return (dispatch) => {
    dispatch({
      type: types.STAR_LOADING,
    });
  };
};

export const finishLoading = () => {
  return (dispatch) => {
    dispatch({
      type: types.FINISH_LOADING,
    });
  };
};
