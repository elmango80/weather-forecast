import React from "react";

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHideFor,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiSpacer,
} from "@elastic/eui";
import { Helmet } from "react-helmet";

import ComboBoxSearch from "components/ComboBoxSearch";
import SingleForecast from "components/SingleForecast";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>El Tiempo | Homepage</title>
      </Helmet>
      <EuiFlexGroup direction="column">
        <EuiFlexItem>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <ComboBoxSearch />
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
        </EuiFlexItem>
        <EuiHideFor sizes={["xs", "s"]}>
          <EuiSpacer size="xxl" />
        </EuiHideFor>

        <EuiFlexItem>
          <EuiPageContentBody>
            <EuiFlexGroup>
              <EuiFlexItem>
                <SingleForecast />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPageContentBody>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
}
