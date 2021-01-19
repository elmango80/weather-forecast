import React from "react";

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
} from "@elastic/eui";
import { Helmet } from "react-helmet";

import FormRegistration from "components/FormRegistration";

export default function Register() {
  return (
    <>
      <Helmet>
        <title>El Tiempo | Registrase</title>
      </Helmet>
      <EuiPage style={{ minHeight: "calc(100vh - 4rem)" }}>
        <EuiPageBody component="section">
          <EuiPageContent verticalPosition="center" horizontalPosition="center">
            <EuiPageContentHeader>
              <EuiPageContentHeaderSection>
                <EuiTitle>
                  <h2>Crea tu cuenta</h2>
                </EuiTitle>
              </EuiPageContentHeaderSection>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <FormRegistration />
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </>
  );
}
