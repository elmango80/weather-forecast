import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { EuiFlexGrid, EuiFlexItem } from "@elastic/eui";

import CardForecast from "components/CardForecast";
import LoadingForecast from "components/LoadingForecast";

import "./styles.css";

export default function ListForecast() {
  const { forecasts, loading } = useSelector((state) => state.forecast);
  const { favorites } = useSelector((state) => state.favorite);

  return (
    <EuiFlexGrid columns={2} className="forecast__wrapper" gutterSize="xl">
      {loading && (
        <EuiFlexItem>
          <LoadingForecast />
        </EuiFlexItem>
      )}
      {_.values(forecasts)
        .reverse()
        .map((item) => {
          const isFavorite = item.municipalityId in favorites;
          const docRef = favorites[item.municipalityId];

          return (
            <EuiFlexItem key={item.municipalityId}>
              <CardForecast {...item} isFavorite={isFavorite} docRef={docRef} />
            </EuiFlexItem>
          );
        })}
    </EuiFlexGrid>
  );
}
