import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { addFavorites, deleteFavorite } from "redux/actions/favorite";

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
                      await Promise.all([
                        dispatch(deleteFavorite(docRef, municipalityId)),
                      ]);
                    } else {
                      const data = {
                        municipalityId,
                        uid,
                        forecast: {
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
                        },
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
            <h3 className="card-content__current-date">
              {moment().locale("es").format("dddd, DD MMM   ")}
            </h3>
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
