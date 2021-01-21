import {
  firebase,
  githubAuthProvider,
  googleAuthProvider,
} from "firebase/config";
import { types } from "../types/types";
import { removeError, setError, startLoading, finishLoading } from "./ui";
import { getFavorites } from "./user";

export const login = ({ uid, displayName, photoURL }) => {
  return (dispatch) => {
    dispatch({ type: types.LOGIN, payload: { uid, displayName, photoURL } });
    dispatch(getFavorites(uid));
  };
};

export const logout = () => ({
  type: types.LOGOUT,
});

export const registerWithEmailAndPassword = (completeName, email, password) => {
  return (dispatch) => {
    dispatch(startLoading());

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: completeName });

        dispatch(login(user.uid, user.displayName, user));
        dispatch(removeError());
      })
      .catch((error) => {
        dispatch(setError("No hemos podido registrarte como usuario."));

        console.error(error);
      })
      .finally(() => {
        dispatch(finishLoading());
      });
  };
};

export const loginWithEmailAndPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(startLoading());

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        dispatch(login(user));
        dispatch(removeError());
      })
      .catch((error) => {
        dispatch(
          setError(
            "El correo electrónico y contraseña no corresponden a un usuario registrado."
          )
        );

        console.error(error);
      })
      .finally(() => {
        dispatch(finishLoading());
      });
  };
};

export const loginWithGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user));
        dispatch(removeError());
      })
      .catch((error) => {
        dispatch(
          setError("No hemos podido autenticar a tu usuario de Google.")
        );
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
        dispatch(login(user));
        dispatch(removeError());
      })
      .catch((error) => {
        dispatch(
          setError("No hemos podido autenticar a tu usuario de Github.")
        );
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
