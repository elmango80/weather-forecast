import React from "react";
import { useSelector } from "react-redux";
import { EuiFlexGrid, EuiFlexItem } from "@elastic/eui";

import CardForecast from "components/CardForecast";

export default function ListForecast() {
  const { selected } = useSelector((state) => state.municipality);

  return (
    <EuiFlexGrid
      columns={2}
      style={{ justifyContent: "space-evenly" }}
      gutterSize="xl"
    >
      {selected.map((item) => (
        <EuiFlexItem key={item.municipalityId}>
          <CardForecast {...item} />
        </EuiFlexItem>
      ))}
    </EuiFlexGrid>
  );
}
