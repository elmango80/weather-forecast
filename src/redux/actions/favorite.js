import { db } from "firebase/config";
import { axios } from "helpers/axiosHelper";

import { normalizeData } from "helpers/forecastHelper";
import { getDocuments } from "helpers/firebaseHelper";
import { types } from "../types/types";

const favoritesRef = db.collection("favorites");

export function addFavorites({ uid, municipalityId, provinceId, forecast }) {
  return async (dispatch) =>
    favoritesRef
      .where("uid", "==", uid)
      .orderBy("position", "desc")
      .limit(1)
      .get()
      .then((snap) => {
        const documents = getDocuments(snap);
        const position = (documents[0]?.position ?? 0) + 1;

        favoritesRef
          .add({ uid, municipalityId, provinceId, position })
          .then((docRef) => {
            dispatch({
              type: types.ADD_FAVORITE,
              payload: {
                [municipalityId]: {
                  ...forecast,
                  docRef: docRef.id,
                },
              },
            });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((e) => console.error(e));
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

export function updatePosition(docRef, position) {
  return () => {
    favoritesRef
      .doc(docRef)
      .update({ position })
      .then(() => console.log(`Documento ${docRef} actualizado...`))
      .catch((error) => console.error(error));
  };
}

export function getFavorites(uid) {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_FAVORITES_REQUEST,
    });

    favoritesRef
      .where("uid", "==", uid)
      .orderBy("position")
      .get()
      .then(async (snap) => {
        const userFavorites = getDocuments(snap);

        if (!userFavorites.length) {
          dispatch({
            type: types.FETCH_FAVORITES_SUCCESS,
            payload: {},
          });

          return;
        }

        const forecastFavorites = {};

        for (const userFavorite of userFavorites) {
          const { municipalityId, provinceId, id } = userFavorite;
          const codeINE = municipalityId.slice(0, 5);

          try {
            const response = await axios.get(
              `/provincias/${provinceId}/municipios/${codeINE}`
            );
            const data = normalizeData(response.data);

            forecastFavorites[municipalityId] = { ...data, docRef: id };
          } catch (error) {
            console.error(error);

            dispatch({
              type: types.FETCH_FAVORITES_FAILURE,
            });

            return;
          }
        }

        dispatch({
          type: types.FETCH_FAVORITES_SUCCESS,
          payload: forecastFavorites,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.FETCH_FAVORITES_FAILURE,
          payload: error.message,
        });

        console.error(error);
      });
  };
}
