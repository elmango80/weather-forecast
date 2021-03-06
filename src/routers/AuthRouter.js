import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Login = React.lazy(() =>
  import(/*webpackChunkName: "login"*/ "pages/login")
);

const Register = React.lazy(() =>
  import(/*webpackChunkName: "login"*/ "pages/register")
);

export const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth/ingresar" component={Login} />
      <Route exact path="/auth/registrar" component={Register} />
      <Redirect to="/auth/ingresar" />
    </Switch>
  );
};
