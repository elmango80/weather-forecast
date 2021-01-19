import React from "react";
import "./styles.css";
import "styles/weather-icons.css";

import {
  EuiButtonIcon,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTitle,
  EuiToolTip,
} from "@elastic/eui";

export default function CardForecast({ municipality, province }, ...rest) {
  return (
    <EuiCard
      {...rest}
      betaBadgeLabel="Nombre provincia"
      textAlign="left"
      title={
        <EuiFlexGroup
          gutterSize="l"
          alignItems="stretch"
          justifyContent="spaceBetween"
          responsive={false}
        >
          <EuiFlexItem>
            <EuiTitle size="m">
              <h1>{"NOMBRE DEL MUNICIPIO"}</h1>
            </EuiTitle>{" "}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiToolTip content="Añadir a mis favoritos">
              <EuiButtonIcon
                color="primary"
                onClick={() => {
                  console.log("Add to favorites click!");
                }}
                iconType="starEmpty"
                iconSize="xl"
                aria-label="Add to favorites"
              />
            </EuiToolTip>
          </EuiFlexItem>
        </EuiFlexGroup>
      }
      description={<></>}
    >
      <EuiFlexGroup
        alignItems="center"
        justifyContent="spaceBetween"
        responsive={false}
      >
        <EuiFlexItem grow={false}>
          <span className="temperature__current">8</span>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <span className="state-sky" data-id="12" />
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFlexGroup
        alignItems="flexEnd"
        justifyContent="spaceBetween"
        responsive={false}
      >
        <EuiFlexItem grow={false}>
          <EuiText textAlign="left">
            <h4>JUEVES, 14 ENE</h4>
            <div>Poco nuboso</div>
            <div className="temperature">
              <span className="temperature__maximun">13</span>
              <span className="temperature__minimun">5</span>
            </div>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText textAlign="right">
            <div>Humedad: 65%</div>
            <div>Viento: 14 km/h</div>
            <div>Lluvia: 0%</div>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiCard>
  );
}
