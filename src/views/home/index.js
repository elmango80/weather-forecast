import {
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
} from "@elastic/eui";
import React from "react";

export default function HomePage() {
  return (
    <>
      <EuiPageContentHeader>
        <EuiPageContentHeaderSection>
          <EuiTitle size="s">
            <h1>Selecciona un municipio</h1>
          </EuiTitle>
        </EuiPageContentHeaderSection>
      </EuiPageContentHeader>
      <EuiPageContentBody>Pronostico del clima</EuiPageContentBody>
    </>
  );
}
