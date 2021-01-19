import { types } from "../types/types";

const initialState = {
  list: [],
  selected: [],
};

export default function municipalityReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case types.GET_MUNICIPALITIES:
      return {
        ...state,
        list: payload.data,
      };

    default:
      return state;
  }
}
