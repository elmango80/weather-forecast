import { db } from "firebase/config";
import { axios } from "helpers/axiosHelper";

import { normalizeData } from "helpers/forecastHelper";
import { getDocuments } from "helpers/firebaseHelper";
import { types } from "../types/types";

const favoritesRef = db.collection("favorites");

export function addFavorites(data) {
  return async (dispatch) =>
    favoritesRef
      .add(data)
      .then((docRef) => {
        dispatch({
          type: types.ADD_FAVORITE,
          payload: {
            [data.municipalityId]: {
              ...data.forecast,
              docRef: docRef.id,
            },
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
}

export function deleteFavorite(docRef, municipalityId) {
  return async (dispatch) => {
    favoritesRef
      .doc(docRef)
      .delete()
      .then(() => {
        dispatch({
          type: types.DELETE_FAVORITE,
          payload: [municipalityId],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function getFavorites(uid) {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_FAVORITES_REQUEST,
    });

    favoritesRef
      .where("uid", "==", uid)
      .get()
      .then((snap) => {
        const documents = getDocuments(snap);

        let favorites = {};

        documents
          .reduce(async (acc, { id, municipalityId, provinceId }) => {
            try {
              const codeINE = municipalityId.slice(0, 5);

              const response = await axios.get(
                `/provincias/${provinceId}/municipios/${codeINE}`
              );

              const data = normalizeData(response.data);

              favorites = {
                ...favorites,
                [municipalityId]: { ...data, docRef: id },
              };

              return;
            } catch (error) {
              dispatch({
                type: types.FETCH_FAVORITES_FAILURE,
              });

              console.error(error);

              return;
            }
          }, {})
          .then(() => {
            dispatch({
              type: types.FETCH_FAVORITES_SUCCESS,
              payload: favorites,
            });
          });
      })
      .catch((error) => console.error(error));
  };
}
