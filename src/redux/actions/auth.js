import {
  firebase,
  githubAuthProvider,
  googleAuthProvider,
} from "firebase/config";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const login = (uid, displayName) => ({
  type: types.LOGIN,
  payload: {
    uid,
    displayName,
  },
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const registerWithEmailAndPassword = (completeName, email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: completeName });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const loginWithEmailAndPassword = (email, password) => {
  return async (dispatch) => {
    // dispatch(startLoading());

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        dispatch(login(user.uid, user.displayName, null));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        // dispatch(finishLoading());
      });
  };
};

export const loginWithGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.photoURL));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const loginWithGithub = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(githubAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.photoURL));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch(logout());
  };
};
