import { types } from "../types/types";

export default function registrationReducer(state = null, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.LOGOUT:
      return null;

    default:
      return state;
  }
}
