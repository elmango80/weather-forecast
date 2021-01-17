import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
} from "@elastic/eui";

import FormLogin from "components/FormLogin";

export default function Login() {
  return (
    <EuiPage style={{ minHeight: "calc(100vh - 4rem)" }}>
      <EuiPageBody component="section">
        <EuiPageContent verticalPosition="center" horizontalPosition="center">
          <EuiPageContentBody>
            <FormLogin />
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}
