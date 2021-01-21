import React from "react";

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiSpacer,
} from "@elastic/eui";
import { Helmet } from "react-helmet";

import ComboBoxSearch from "components/ComboBoxSearch";
import ListForecast from "components/ListForecast";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>El Tiempo | Homepage</title>
      </Helmet>

      <EuiPageContentHeader>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiPageContentHeaderSection>
              <ComboBoxSearch />
            </EuiPageContentHeaderSection>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageContentHeader>

      <EuiSpacer size="xxl" />

      <EuiPageContentBody>
        <EuiFlexGroup>
          <EuiFlexItem>
            <ListForecast />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageContentBody>
    </>
  );
}
