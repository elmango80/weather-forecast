import { types } from "../types/types";

const initialState = {
  uid: "",
  displayName: "",
  photoURL: null,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.LOGIN:
      return {
        uid: payload.uid,
        displayName: payload.displayName,
        photoURL: payload.photoURL,
      };

    case types.LOGOUT:
      return initialState;

    default:
      return state;
  }
}
