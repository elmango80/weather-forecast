import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
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
    return <h1>Cargando...</h1>;
  }

  return (
    <BrowserRouter>
      <Suspense delayMs={500} fallback={<h1>Cargando...</h1>}>
        <Switch>
          <Route
            exact
            path="/ingresar"
            name="Login"
            component={(props) =>
              isAuthenticated ? <Login {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/registrar"
            name="Register"
            component={(props) =>
              isAuthenticated ? <Register {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            path="/"
            name="Home"
            component={(props) => {
              return isAuthenticated ? (
                <>
                  <h1>Rutas privadas</h1>
                  <Link to="/ingresar" style={{ marginRight: 10 }}>
                    Ingresar
                  </Link>
                  <Link to="/registrar">Registrarse</Link>
                </>
              ) : (
                <Redirect
                  to={{
                    pathname: "/ingresar",
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
