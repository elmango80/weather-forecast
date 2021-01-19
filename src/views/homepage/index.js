import React from "react";

import {
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHideFor,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";

import ComboBoxSearch from "components/ComboBoxSearch";
import CardForecast from "components/CardForecast";

export default function HomePage() {
  return (
    <EuiPageContentHeader>
      <EuiFlexGroup direction="column">
        <EuiFlexItem>
          <EuiPageContentHeaderSection>
            <EuiFlexGrid columns={1} direction="column" gutterSize="s">
              <EuiFlexItem grow={false}>
                <EuiTitle>
                  <h1>Selecciona un municipio</h1>
                </EuiTitle>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <ComboBoxSearch fullWidth />
              </EuiFlexItem>
            </EuiFlexGrid>
          </EuiPageContentHeaderSection>
        </EuiFlexItem>
        <EuiHideFor sizes={["xs", "s"]}>
          <EuiSpacer size="xxl" />
        </EuiHideFor>

        <EuiFlexItem>
          <EuiPageContentBody>
            <EuiFlexGrid
              columns={2}
              style={{ justifyContent: "space-evenly" }}
              gutterSize="xl"
            >
              <EuiFlexItem>
                <CardForecast />
              </EuiFlexItem>
              <EuiFlexItem>
                <CardForecast />
              </EuiFlexItem>
              <EuiFlexItem>
                <CardForecast />
              </EuiFlexItem>
              <EuiFlexItem>
                <CardForecast />
              </EuiFlexItem>
              <EuiFlexItem>
                <CardForecast />
              </EuiFlexItem>
            </EuiFlexGrid>
          </EuiPageContentBody>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPageContentHeader>
  );
}
