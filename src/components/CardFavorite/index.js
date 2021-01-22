import React from "react";

import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";

import "./styles.css";
import "styles/weather-icons.css";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "redux/actions/favorite";

function CardFavorite({
  municipalityId,
  municipalityName,
  stateSkyId,
  stateSkyDescription,
  currentTemperature,
  maxTemperature,
  minTemperature,
  docRef,
}) {
  const dispatch = useDispatch();

  return (
    <EuiPanel paddingSize="none" className="favorite__panel">
      <EuiFlexGroup
        direction="column"
        gutterSize="none"
        className="favorite__wrapper"
        responsive={false}
      >
        <EuiFlexItem className="favorite-panel__title" grow={false}>
          <EuiText className="favorite-panel__name">{municipalityName}</EuiText>
        </EuiFlexItem>
        <EuiFlexItem className="favorite-panel__content">
          <EuiFlexGroup
            direction="column"
            gutterSize="none"
            justifyContent="spaceBetween"
            responsive={false}
          >
            <EuiFlexItem>
              <EuiFlexGroup
                direction="column"
                gutterSize="none"
                justifyContent="spaceEvenly"
                responsive={false}
              >
                <EuiFlexItem grow={false}>
                  <EuiFlexGroup
                    className="favorite-panel-content__state-sky"
                    direction="column"
                    gutterSize="none"
                    justifyContent="spaceEvenly"
                    responsive={false}
                  >
                    <EuiFlexItem>
                      <div
                        className="card-content__state-sky"
                        data-id={stateSkyId}
                      />
                    </EuiFlexItem>
                    <EuiSpacer size="s" />
                    <EuiFlexItem className="favorite-panel__state-sky-description">
                      <EuiText className="favorite-panel__state-sky-description">
                        {stateSkyDescription}
                      </EuiText>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiFlexGroup
                    gutterSize="s"
                    responsive={false}
                    alignItems="stretch"
                    justifyContent="center"
                  >
                    <EuiFlexItem grow={false}>
                      <EuiText className="favorite_panel_current-temperature">
                        {currentTemperature}
                      </EuiText>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiFlexGroup
                        gutterSize="none"
                        responsive={false}
                        direction="column"
                        alignItems="flexStart"
                      >
                        <EuiFlexItem>
                          <EuiText className="favorite_panel_max-temperature">
                            {maxTemperature}
                          </EuiText>
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                          <EuiText className="favorite_panel_min-temperature">
                            {minTemperature}
                          </EuiText>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
            <EuiFlexItem className="favorite-panel__button-remove" grow={false}>
              <EuiButton
                className="button--remove"
                onClick={async () => {
                  await Promise.all([
                    dispatch(deleteFavorite(docRef, municipalityId)),
                  ]);
                  console.log("Click remove!", `docRef ${docRef}`);
                }}
              >
                Eliminar
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>
  );
}

export default React.memo(CardFavorite);
