import { db } from "firebase/config";
import { getDocuments } from "helpers/firebaseHelper";
import { types } from "../types/types";

const favoritesRef = db.collection("favorites");

export function addFavorites(data) {
  return async (dispatch) =>
    favoritesRef
      .add(data)
      .then((docRef) => {
        console.log({ [data.municipalityId]: docRef.id });
        dispatch({
          type: types.ADD_FAVORITE,
          payload: { [data.municipalityId]: docRef.id },
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
    favoritesRef
      .where("uid", "==", uid)
      .get()
      .then((snap) => {
        const results = getDocuments(snap);

        const favorites = results.reduce((acc, { id, municipalityId }) => {
          acc = { ...acc, [municipalityId]: id };

          return acc;
        }, {});

        dispatch({
          type: types.GET_FAVORITES,
          payload: {
            municipalities: favorites,
          },
        });
      })
      .catch((error) => console.error(error));
  };
}
