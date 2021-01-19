import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

import { registerWithEmailAndPassword } from "redux/actions/auth";
import registerScheme from "schemes/registerScheme";

import {
  EuiButton,
  EuiFieldText,
  EuiFieldPassword,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiText,
  EuiHorizontalRule,
} from "@elastic/eui";

const initValues = {
  completeName: "",
  email: "",
  password: "",
};

export default function FormRegistration() {
  const dispatch = useDispatch();
  const { loading, msgError } = useSelector((state) => state.ui);

  return (
    <Formik
      initialValues={initValues}
      validationSchema={registerScheme}
      onSubmit={(values) => {
        const { completeName, email, password } = values;

        dispatch(registerWithEmailAndPassword(completeName, email, password));
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
            noValidate
          >
            <EuiFormRow
              label="Nombre completo"
              isInvalid={errors.completeName && touched.completeName}
              error={errors.completeName}
            >
              <EuiFieldText
                placeholder="Nombre completo"
                name="completeName"
                autoComplete="off"
                value={values.completeName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={errors.completeName && touched.completeName}
                disabled={loading}
              />
            </EuiFormRow>
            <EuiFormRow
              label="Correo electrónico"
              isInvalid={errors.email && touched.email}
              error={errors.email}
            >
              <EuiFieldText
                placeholder="Correo electrónico"
                name="email"
                type="email"
                autoComplete="off"
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
              helpText={
                !errors.password &&
                "La contraseña debe contener mínimo 8 caracteres."
              }
            >
              <EuiFieldPassword
                placeholder="Contraseña"
                name="password"
                type="dual"
                autoComplete="off"
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
              Registrate
            </EuiButton>
            <EuiHorizontalRule margin="xxl" />
            <EuiText textAlign="center">
              <p>
                {`¿Ya tienes una cuenta? `}
                <Link to="/ingresar">Iniciar sesión</Link>
              </p>
            </EuiText>
          </EuiForm>
        );
      }}
    </Formik>
  );
}
