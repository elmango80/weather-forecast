import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { addFavorites, deleteFavorite } from "redux/actions/user";

import {
  EuiButtonIcon,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiText,
  EuiTitle,
  EuiToolTip,
} from "@elastic/eui";

import "./styles.css";
import "styles/weather-icons.css";

function CardForecast({
  provinceName,
  municipalityId,
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
  isFavorite,
  docRef,
}) {
  const [busy, setBusy] = useState(false);
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);

  return (
    <EuiCard
      className="forecast__card"
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
              <h1 className="card-title__title">{municipalityName}</h1>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem grow={false} style={{ justifyContent: "center" }}>
            {busy ? (
              <EuiLoadingSpinner
                size="l"
                style={{
                  margin: ".5rem",
                  borderColor: "#006BB4 #f5df4d #f5df4d #f5df4d",
                }}
              />
            ) : (
              <EuiToolTip
                content={
                  isFavorite
                    ? "Eliminar de mis favoritos"
                    : "Añadir a mis favoritos"
                }
              >
                <EuiButtonIcon
                  className="card-title__button-icon"
                  onClick={async () => {
                    setBusy(true);
                    if (isFavorite) {
                      console.log("Delete Click!");
                      await Promise.all([
                        dispatch(deleteFavorite(docRef, municipalityId)),
                      ]);
                    } else {
                      console.log("Add Click!");
                      const data = {
                        municipalityId,
                        uid,
                      };

                      await Promise.all([dispatch(addFavorites(data))]);
                    }
                    setBusy(false);
                  }}
                  iconType={isFavorite ? "starFilled" : "starEmpty"}
                  iconSize="xl"
                  aria-label="Add to favorites"
                />
              </EuiToolTip>
            )}
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
          <span className="card-content__temperature-current">
            {currentTemperature}
          </span>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <span className="card-content__state-sky" data-id={stateSkyId} />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup
        className="forecast__card-content"
        alignItems="flexEnd"
        justifyContent="spaceBetween"
        responsive={false}
      >
        <EuiFlexItem grow={false}>
          <EuiText className="card-content__forecast-info" textAlign="left">
            <h4 className="card-content__current-date">{date}</h4>
            <div>{stateSkyDescription}</div>
            <div>
              <span className="card-content__temperature-maximun">
                {maxTemperature}
              </span>
              <span className="card-content__temperature-minimun">
                {minTemperature}
              </span>
            </div>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText className="card-content__forecast-info" textAlign="right">
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
