import db from "../firebase/config";
import { getDocuments } from "../helpers/firebase";

const favoritesRef = db.collection("favorites");

export function addFavorites(data) {
  favoritesRef
    .add(data)
    .then((docRef) => console.log(docRef))
    .catch((e) => console.error(e));
}

export function deleteFavorites(docRef) {
  favoritesRef
    .doc(docRef)
    .then(() => true)
    .catch((e) => {
      console.error(e);

      return false;
    });
}

export function updateFavorites(id, data) {
  favoritesRef
    .doc(id)
    .update(data)
    .then(() => console.log("Documento actualizado"))
    .catch((e) => console.error(e));
}

export function getFavorites(userId) {
  favoritesRef
    .where("userId", "==", userId)
    .orderby("position", "desc")
    .limit(1)
    .get()
    .then(getDocuments)
    .catch((e) => console.error(e));
}
