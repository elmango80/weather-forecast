import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
} from "@elastic/eui";
import { Helmet } from "react-helmet";

import FormLogin from "components/FormLogin";

export default function Login() {
  return (
    <>
      <Helmet>
        <title>El Tiempo | Ingresar</title>
      </Helmet>
      <EuiPage className="public-page">
        <EuiPageBody component="section">
          <EuiPageContent verticalPosition="center" horizontalPosition="center">
            <EuiPageContentBody>
              <FormLogin />
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </>
  );
}
