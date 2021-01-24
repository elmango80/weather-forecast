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
import ForecastNational from "components/ForecastNational";

import ComboBoxSearch from "components/ComboBoxSearch";
import ListForecast from "components/ListForecast";
import BottomBarFavorites from "components/BottomBarFavorites";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>El Tiempo | España</title>
      </Helmet>

      <EuiPageContentHeader responsive={false}>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiPageContentHeaderSection>
              <ComboBoxSearch />
            </EuiPageContentHeaderSection>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageContentHeader>

      <EuiHideFor sizes={["xs"]}>
        <EuiSpacer size="xxl" />
      </EuiHideFor>

      <EuiPageContentBody>
        <EuiFlexGroup direction="column">
          <EuiFlexItem>
            <EuiFlexGroup>
              <EuiFlexItem>
                <ListForecast />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiHideFor sizes={["xs"]}>
            <EuiSpacer size="xxl" />
          </EuiHideFor>
          <EuiFlexItem>
            <ForecastNational />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageContentBody>
      <BottomBarFavorites />
    </>
  );
}
