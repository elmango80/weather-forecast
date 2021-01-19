import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { firebase } from "firebase/config";
import { login } from "redux/actions/auth";
import { finishLoading } from "redux/actions/ui";

import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import LoadingOverlay from "components/LoadingOverlay";

export default function AppRouter() {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      setIsChecking(false);
      dispatch(finishLoading());
    });
  }, [dispatch]);

  if (isChecking) {
    return <LoadingOverlay />;
  }

  return (
    <BrowserRouter>
      <Suspense delayMs={500} fallback={<LoadingOverlay />}>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute path="/" isAuthenticated={isAuthenticated} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
