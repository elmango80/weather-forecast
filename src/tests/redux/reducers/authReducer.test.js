import authReducer from "redux/reducers/authReducer";
import { types } from "redux/types/types";

const initialState = {
  uid: "",
  displayName: "",
  photoURL: null,
};

describe("Test authReducer", () => {
  test("should do login", () => {
    const action = {
      type: types.LOGIN,
      payload: {
        uid: "IejeJtqqpMbZQMtFVGhwBibaCDM2",
        displayName: "John Doe",
        photoURL: "http://dummyimage.com/133x128.png",
      },
    };

    const state = authReducer(initialState, action);

    expect(state).toEqual({
      uid: "IejeJtqqpMbZQMtFVGhwBibaCDM2",
      displayName: "John Doe",
      photoURL: "http://dummyimage.com/133x128.png",
    });
  });

  test("should do logout", () => {
    const action = {
      type: types.LOGOUT,
    };
    const state = authReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  test("should don't changes to the state", () => {
    const action = {
      type: "",
    };

    const state = authReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});
