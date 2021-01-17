import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { firebase } from "firebase/config";
import { login } from "redux/actions/auth";
import { finishLoading } from "redux/actions/ui";

const Login = React.lazy(() =>
  import(/*webpackChunkName: "login"*/ "views/login")
);

const Register = React.lazy(() =>
  import(/*webpackChunkName: "login"*/ "views/register")
);

export default function AppRouter() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      dispatch(finishLoading());
    });
  }, [dispatch]);

  if (loading) {
    return <h1>Espere...</h1>;
  }

  return (
    <BrowserRouter>
      <Suspense delayMs={500} fallback={<h1>Cargando...</h1>}>
        <Switch>
          <Route
            exact
            path="/ingresar"
            name="Login"
            render={(props) => <Login {...props} />}
          />
          <Route
            exact
            path="/registrar"
            name="Register"
            render={(props) => <Register {...props} />}
          />
          <Route
            path="/"
            name="Home"
            render={(props) => {
              return isAuthenticated ? (
                <>
                  <div>Rutas privadas</div>
                </>
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location },
                  }}
                />
              );
            }}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
