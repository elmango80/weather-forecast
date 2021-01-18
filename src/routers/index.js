import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { firebase } from "firebase/config";
import { login } from "redux/actions/auth";
import { finishLoading } from "redux/actions/ui";

import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export default function AppRouter() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      dispatch(finishLoading());
    });
  }, [dispatch]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <BrowserRouter>
      <Suspense delayMs={500} fallback={<h1>Cargando...</h1>}>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute isAuthenticated={isAuthenticated} path="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
