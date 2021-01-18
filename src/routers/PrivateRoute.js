import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect, Link } from "react-router-dom";

const Layout = (props) => (
  <>
    <h1>Rutas privadas</h1>
    <Link to="/auth/ingresar" style={{ marginRight: 10 }}>
      Ingresar
    </Link>
    <Link to="/auth/registrar">Registrarse</Link>
  </>
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
