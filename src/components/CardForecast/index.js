import React from "react";

import {
  EuiButtonIcon,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTitle,
  EuiToolTip,
} from "@elastic/eui";

import "./styles.css";
import "styles/weather-icons.css";

function CardForecast({
  provinceName,
  municipalityName,
  date,
  stateSkyId,
  stateSkyDescription,
  currentTemperature,
  maxTemperature,
  minTemperature,
  humidity,
  wind,
  rain,
}) {
  return (
    <EuiCard
      betaBadgeLabel={provinceName}
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
              <h1>{municipalityName}</h1>
            </EuiTitle>
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
          <span className="temperature__current">{currentTemperature}</span>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <span className="state-sky" data-id={stateSkyId} />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup
        alignItems="flexEnd"
        justifyContent="spaceBetween"
        responsive={false}
      >
        <EuiFlexItem grow={false}>
          <EuiText textAlign="left">
            <h4>{date}</h4>
            <div>{stateSkyDescription}</div>
            <div className="temperature">
              <span className="temperature__maximun">{maxTemperature}</span>
              <span className="temperature__minimun">{minTemperature}</span>
            </div>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText textAlign="right">
            <div>{`Humedad: ${humidity}`}</div>
            <div>{`Viento: ${wind} km/h`}</div>
            <div>{`Lluvia: ${rain}%`}</div>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiCard>
  );
}

export default React.memo(CardForecast);
