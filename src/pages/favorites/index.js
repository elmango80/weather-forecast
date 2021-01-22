import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { getForecast, removeForecast } from "redux/actions/forecast";

import {
  EuiDragDropContext,
  EuiFlexGroup,
  EuiFlexItem,
  EuiDraggable,
  EuiDroppable,
  euiDragDropMove,
  euiDragDropReorder,
  EuiSpacer,
  EuiPageContentBody,
} from "@elastic/eui";
import { Helmet } from "react-helmet";

import CardForecast from "components/CardForecast";

export default function Favorites() {
  const [leftDraggable, setLeftDraggable] = useState([]);
  const [rightDraggable, setRightDraggable] = useState([]);
  const { municipalities } = useSelector((state) => state.municipality);
  const { favorites } = useSelector((state) => state.favorite);
  const { forecasts } = useSelector((state) => state.forecast);
  const dispatch = useDispatch();

  useEffect(() => {
    Object.keys(favorites).forEach((municipality) => {
      if (municipalities[municipality]) {
        const { provinceId, municipalityId } = municipalities[municipality];

        dispatch(getForecast(provinceId, municipalityId));
      }
    });
  }, [dispatch, favorites, municipalities]);

  useEffect(() => {
    let index = 0;

    const [left, right] = _.partition(
      _.values(forecasts),
      () => index++ % 2 === 0
    );

    setLeftDraggable(left);
    setRightDraggable(right);
  }, [dispatch, forecasts]);

  useEffect(() => {
    return () => {
      dispatch(removeForecast());
    };
  }, [dispatch]);

  const onDragEnd = ({ source, destination }) => {
    const lists = {
      DROPPABLE_AREA_TYPE_1: leftDraggable,
      DROPPABLE_AREA_TYPE_2: rightDraggable,
    };
    const actions = {
      DROPPABLE_AREA_TYPE_1: setLeftDraggable,
      DROPPABLE_AREA_TYPE_2: setRightDraggable,
    };

    if (source && destination) {
      if (source.droppableId === destination.droppableId) {
        const items = euiDragDropReorder(
          lists[destination.droppableId],
          source.index,
          destination.index
        );

        actions[destination.droppableId](items);
      } else {
        const sourceId = source.droppableId;
        const destinationId = destination.droppableId;
        const result = euiDragDropMove(
          lists[sourceId],
          lists[destinationId],
          source,
          destination
        );

        actions[sourceId](result[sourceId]);
        actions[destinationId](result[destinationId]);
      }
    }
    // dispatch(updateFavorites());
  };

  return (
    <>
      <Helmet>
        <title>El Tiempo | Homepage</title>
      </Helmet>

      <EuiPageContentBody>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiDragDropContext onDragEnd={onDragEnd}>
              <EuiSpacer size="xl" />
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiDroppable
                    droppableId="DROPPABLE_AREA_TYPE_1"
                    type="TYPE_ONE"
                    spacing="none"
                    grow={false}
                  >
                    {leftDraggable.map((forecast, idx) => (
                      <EuiDraggable
                        key={forecast.municipalityId}
                        index={idx}
                        draggableId={forecast.municipalityId}
                        spacing="m"
                      >
                        {(provided, state) => {
                          const { docRef } = favorites[forecast.municipalityId];

                          return (
                            <>
                              <CardForecast
                                {...forecast}
                                isFavorite
                                docRef={docRef}
                              />
                              <EuiSpacer size="xl" />
                            </>
                          );
                        }}
                      </EuiDraggable>
                    ))}
                  </EuiDroppable>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiDroppable
                    droppableId="DROPPABLE_AREA_TYPE_2"
                    type="TYPE_ONE"
                    spacing="none"
                    grow={false}
                  >
                    {rightDraggable.map((forecast, idx) => (
                      <EuiDraggable
                        key={forecast.municipalityId}
                        index={idx}
                        draggableId={forecast.municipalityId}
                        spacing="m"
                      >
                        {(provided, state) => {
                          const { docRef } = favorites[forecast.municipalityId];

                          return (
                            <>
                              <CardForecast
                                {...forecast}
                                isFavorite
                                docRef={docRef}
                              />
                              <EuiSpacer size="xl" />
                            </>
                          );
                        }}
                      </EuiDraggable>
                    ))}
                  </EuiDroppable>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiDragDropContext>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageContentBody>
    </>
  );
}
