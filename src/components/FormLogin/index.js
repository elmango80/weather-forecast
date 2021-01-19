import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

import {
  loginWithEmailAndPassword,
  loginWithGithub,
  loginWithGoogle,
} from "redux/actions/auth";

import loginScheme from "schemes/loginScheme";

import {
  EuiButton,
  EuiFieldText,
  EuiFieldPassword,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiHorizontalRule,
  EuiText,
} from "@elastic/eui";

const initValues = {
  email: "",
  password: "",
};

export default function FormLogin() {
  const dispatch = useDispatch();
  const { loading, msgError } = useSelector((state) => state.ui);

  return (
    <Formik
      initialValues={initValues}
      validationSchema={loginScheme}
      onSubmit={(values) => {
        const { email, password } = values;

        dispatch(loginWithEmailAndPassword(email, password));
      }}
    >
      {(props) => {
        const {
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        } = props;

        return (
          <EuiForm
            className="form-auth"
            component="form"
            onSubmit={handleSubmit}
            invalidCallout="none"
            noValidate
          >
            <EuiFormRow
              label="Correo electrónico"
              isInvalid={errors.email && touched.email}
              error={errors.email}
            >
              <EuiFieldText
                placeholder="Correo electrónico"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={errors.email && touched.email}
                disabled={loading}
              />
            </EuiFormRow>
            <EuiFormRow
              label="Contraseña"
              isInvalid={errors.password && touched.password}
              error={errors.password}
            >
              <EuiFieldPassword
                placeholder="Contraseña"
                name="password"
                type="dual"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={errors.password && touched.password}
                disabled={loading}
              />
            </EuiFormRow>
            {msgError && (
              <EuiFormRow>
                <EuiText color="danger" size="s">
                  <p>{msgError}</p>
                </EuiText>
              </EuiFormRow>
            )}
            <EuiSpacer size="xl" />
            <EuiButton type="submit" fill fullWidth isLoading={loading}>
              Iniciar sesión
            </EuiButton>
            <EuiHorizontalRule margin="l" size="half" />
            <EuiButton
              color="text"
              iconType="logoGithub"
              fullWidth
              onClick={() => {
                dispatch(loginWithGithub());
              }}
            >
              Continuar con Github
            </EuiButton>
            <EuiSpacer size="m" />{" "}
            <EuiButton
              iconType="logoGoogleG"
              fullWidth
              onClick={() => {
                dispatch(loginWithGoogle());
              }}
            >
              Continuar con Google
            </EuiButton>
            <EuiHorizontalRule margin="xxl" />
            <EuiText textAlign="center">
              <p>
                {`¿No tienes una cuenta? `}
                <Link to="/auth/registrar">Regístrate</Link>
              </p>
            </EuiText>
          </EuiForm>
        );
      }}
    </Formik>
  );
}
