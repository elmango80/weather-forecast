import React, { useState } from "react";
import { htmlIdGenerator } from "@elastic/eui/lib/services";

import {
  EuiDragDropContext,
  EuiFlexGroup,
  EuiFlexItem,
  EuiDraggable,
  EuiDroppable,
  euiDragDropMove,
  euiDragDropReorder,
  EuiSpacer,
} from "@elastic/eui";

import CardForecast from "components/CardForecast";

const makeId = htmlIdGenerator();

const makeList = (number, start = 1) =>
  Array.from({ length: number }, (v, k) => k + start).map((el) => {
    return {
      content: `Item ${el}`,
      id: makeId(),
    };
  });

export default function Favorites() {
  const [list1, setList1] = useState(makeList(3));
  const [list2, setList2] = useState(makeList(5, 4));
  const onDragEnd = ({ source, destination }) => {
    const lists = {
      DROPPABLE_AREA_TYPE_1: list1,
      DROPPABLE_AREA_TYPE_2: list2,
    };
    const actions = {
      DROPPABLE_AREA_TYPE_1: setList1,
      DROPPABLE_AREA_TYPE_2: setList2,
    };
    console.log(actions);

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
            {list1.map(({ content, id }, idx) => (
              <EuiDraggable key={id} index={idx} draggableId={id} spacing="m">
                {(provided, state) => (
                  <>
                    <CardForecast />
                    <EuiSpacer size="xl" />
                  </>
                )}
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
            {list2.map(({ content, id }, idx) => (
              <EuiDraggable key={id} index={idx} draggableId={id} spacing="m">
                {(provided, state) => (
                  <>
                    <CardForecast />
                    <EuiSpacer size="xl" />
                  </>
                )}
              </EuiDraggable>
            ))}
          </EuiDroppable>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiDragDropContext>
  );
}
