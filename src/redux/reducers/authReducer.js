import { types } from "../types/types";

export default function authReducer(state = null, { type, payload }) {
  switch (type) {
    case types.LOGIN:
      return {
        uid: payload.uid,
        displayName: payload.displayName,
        photoURL: payload.photoURL,
      };

    case types.LOGOUT:
      return null;

    default:
      return state;
  }
}
