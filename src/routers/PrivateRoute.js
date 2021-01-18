import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

const Layout = React.lazy(() =>
  import(/*webpackChunkName: "login"*/ "containers/Layout")
);

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) =>
          isAuthenticated ? (
            <Layout {...props} />
          ) : (
            <Redirect to="/auth/ingresar" />
          )
        }
      />
    </>
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func,
};
