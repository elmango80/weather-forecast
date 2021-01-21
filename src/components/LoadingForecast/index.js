import React from "react";

import {
  EuiButtonIcon,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingContent,
} from "@elastic/eui";

import "./styles.css";
import "styles/weather-icons.css";

export default function LoadingForecast() {
  return (
    <EuiCard
      className="forecast__card forecast__card--loading"
      betaBadgeLabel="cargando"
      textAlign="left"
      title={
        <EuiFlexGroup
          gutterSize="l"
          alignItems="stretch"
          justifyContent="spaceBetween"
          responsive={false}
        >
          <EuiFlexItem>
            <EuiLoadingContent lines={1} />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButtonIcon
              className="card-title__button-icon"
              iconType="starEmpty"
              iconSize="xl"
              aria-label="Add to favorites"
              disabled
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      }
      description={<></>}
    >
      <EuiFlexGroup
        className="forecast__card-content"
        alignItems="center"
        justifyContent="spaceBetween"
        responsive={false}
      >
        <EuiFlexItem grow={false}>
          <EuiLoadingContent lines={3} />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiLoadingContent lines={2} />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup
        className="forecast__card-content"
        alignItems="center"
        justifyContent="spaceBetween"
        responsive={false}
      >
        <EuiFlexItem grow={false}>
          <EuiLoadingContent lines={3} />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiLoadingContent lines={3} />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiCard>
  );
}
