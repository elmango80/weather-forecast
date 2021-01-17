import { types } from "../types/types";

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
      };

    case types.LOGOUT:
      return {};

    default:
      return state;
  }
}
