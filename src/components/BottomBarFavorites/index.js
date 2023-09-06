import { htmlIdGenerator } from "@elastic/eui/lib/services";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  EuiBottomBar,
  EuiDragDropContext,
  euiDragDropReorder,
  EuiDraggable,
  EuiDroppable,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";

import CardFavorite from "components/CardFavorite";

import { updatePosition } from "redux/actions/favorite";
import "./styles.css";

export default function BottomBarFavorites() {
  const dispatch = useDispatch();
  const [draggables, setDraggables] = useState([]);
  const { favorites, loading } = useSelector((state) => state.favorite);
  const droppableId = htmlIdGenerator()();

  useEffect(() => {
    setDraggables(Object.keys(favorites));
  }, [favorites]);

  const updateFavPosition = (source, destination, items) => {
    let start, end;

    if (source > destination) {
      start = destination;
      end = items.length;
    } else if (source < destination) {
      start = source;
      end = ++destination;
    }

    items.slice(start, end).forEach((index) => {
      dispatch(updatePosition(favorites[index].docRef, ++start));
    });
  };

  const onDragEnd = ({ source, destination }) => {
    const lists = { [droppableId]: draggables };
    const actions = { [droppableId]: setDraggables };

    if (!source || !destination) {
      return;
    }

    const items = euiDragDropReorder(
      lists[destination.droppableId],
      source.index,
      destination.index
    );

    actions[destination.droppableId](items);

    updateFavPosition(source.index, destination.index, items);
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
                >
                  {draggables.map((draggable, index) => {
                    const favorite = favorites[draggable];

                    return (
                      <EuiDraggable
                        key={draggable}
                        index={index}
                        draggableId={draggable}
                        spacing="m"
                        disableInteractiveElementBlocking // Allows button to be drag handle
                      >
                        {(provided) => <CardFavorite {...favorite} />}
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
