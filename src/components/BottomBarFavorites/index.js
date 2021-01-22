import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { htmlIdGenerator } from "@elastic/eui/lib/services";

import {
  EuiBottomBar,
  EuiDragDropContext,
  euiDragDropMove,
  euiDragDropReorder,
  EuiDraggable,
  EuiDroppable,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";

import CardFavorite from "components/CardFavorite";

import "./styles.css";

export default function BottomBarFavorites() {
  const [list, setList] = useState([]);
  const { favorites, loading } = useSelector((state) => state.favorite);
  const droppableId = htmlIdGenerator()();

  useEffect(() => {
    setList(Object.keys(favorites));
  }, [favorites]);

  const onDragEnd = ({ source, destination }) => {
    const lists = { [droppableId]: list };
    const actions = { [droppableId]: setList };

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
  };

  return (
    <>
      {!loading && (
        <EuiBottomBar className="favorites__bottom-bar">
          <EuiFlexGroup justifyContent="spaceBetween" responsive={false}>
            <EuiFlexItem>
              <EuiDragDropContext onDragEnd={onDragEnd}>
                <EuiDroppable
                  className="euiFlexGroup favorites__bottom-bar-wrapper"
                  droppableId={droppableId}
                  direction="horizontal"
                  spacing="none"
                  style={{ display: "flex" }}
                >
                  {list.map((municipalityId, index) => {
                    const item = favorites[municipalityId];

                    if (!item) {
                      return <></>;
                    }

                    return (
                      <EuiDraggable
                        key={municipalityId}
                        index={index}
                        draggableId={municipalityId}
                        spacing="m"
                        disableInteractiveElementBlocking // Allows button to be drag handle
                      >
                        {(provided) => {
                          const { docRef } = favorites[item.municipalityId];

                          return <CardFavorite {...item} docRef={docRef} />;
                        }}
                      </EuiDraggable>
                    );
                  })}
                </EuiDroppable>
              </EuiDragDropContext>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiBottomBar>
      )}
    </>
  );
}
