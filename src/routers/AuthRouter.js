import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Login = React.lazy(() =>
  import(/*webpackChunkName: "login"*/ "views/login")
);

const Register = React.lazy(() =>
  import(/*webpackChunkName: "login"*/ "views/register")
);

export const AuthRouter = () => {
  return (
    <Suspense delayMs={500} fallback={<h1>Cargando...</h1>}>
      <Switch>
        <Route exact path="/auth/ingresar" component={Login} />
        <Route exact path="/auth/registrar" component={Register} />
        <Redirect to="/auth/ingresar" />
      </Switch>
    </Suspense>
  );
};
