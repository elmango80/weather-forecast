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
  email: "esanchezredondo@invertironline.com",
  password: "testeo123",
};

export default function FormLogin() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  return (
    <Formik
      initialValues={initValues}
      validationSchema={loginScheme}
      onSubmit={(values, { setSubmitting }) => {
        const { email, password } = values;

        dispatch(loginWithEmailAndPassword(email, password)).then(() => {
          setSubmitting(false);
        });
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
          isSubmitting,
        } = props;

        return (
          <EuiForm
            className="form-auth"
            component="form"
            onSubmit={handleSubmit}
            invalidCallout="none"
          >
            <EuiFormRow
              label="Correo electrónico"
              isInvalid={errors.email && touched.email}
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
            <EuiSpacer size="xl" />
            <EuiButton type="submit" fill fullWidth isLoading={isSubmitting}>
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
                ¿No tienes una cuenta? <Link to="/registrar">Regístrate</Link>
              </p>
            </EuiText>
          </EuiForm>
        );
      }}
    </Formik>
  );
}
