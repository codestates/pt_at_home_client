import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import CreateRoutineCard from '../component/CreateRoutineCard';
// import _WorkoutCard from '../component/_WorkoutCard'
import RoutineBox from '../component/RoutineBox';
import { CreateRoutineProps } from '../../containers/CreateRoutineContainer';
import {
  DragDropContext,
  // Draggable,
  // DragStart,
  Droppable,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd';

export interface ICard {
  id: string;
}

const reorder = (list: ICard[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const CreateRoutine = ({
  myWorkouts,
  clickCardBtnHandler,
  saveMyRoutine,
  setCurretRoutine,
  dropCardIntoRoutineBox,
  clickWorkoutCardHandler,
  addedWorkout,
  isLogin,
}: CreateRoutineProps): JSX.Element => {
  const myWorkoutsIdList = myWorkouts.map((el) =>
    Object.assign({ id: String(el.id) }),
  );
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const droppableRef = useRef<HTMLDivElement | null>(null);
  const [cards, setCards] = useState<ICard[]>(myWorkoutsIdList);
  const [routineCards, setRoutineCards] = useState<ICard[]>([]);
  const [area, setArea] = useState('');

  useEffect(() => {
    setCards(myWorkouts.map((el) =>
    Object.assign({ id: String(el.id) }),
  ))
  }, [myWorkouts])

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    // console.log('result : ', result);
    // console.log('provided : ', provided);
    if (!result.destination) {
      return;
    }
    const sourceId = result.source.droppableId;
    const destinationId = result.destination.droppableId;
    if (sourceId === destinationId) {
      // const setter = sourceId === 'RoutineBox' ? routineCards : cards;
      const _cards = reorder(
        sourceId === 'RoutineBox' ? routineCards : cards,
        result.source.index,
        result.destination.index,
      );
      sourceId === 'RoutineBox' ? setRoutineCards(_cards) : setCards(_cards);
    } else if (destinationId === 'RoutineBox') {
      const targetCard = cards.find((card) => {
        return result.draggableId === card.id;
      });
      if (targetCard) {
        setCards((prev) =>
          prev.filter((card) => card.id !== result.draggableId),
        );
        setRoutineCards((prev) => [...prev, targetCard]);
      }
    } else if (destinationId === 'card') {
      const targetCard = routineCards.find((card) => {
        return result.draggableId === card.id;
      });
      if (targetCard) {
        setRoutineCards((prev) =>
          prev.filter((card) => card.id !== result.draggableId),
        );
        setCards((prev) => [...prev, targetCard]);
      }
    }
  };

  useEffect(() => {
    if (wrapRef?.current?.parentElement) {
      wrapRef.current.parentElement.style.height = '100%';
    }
    if (droppableRef?.current) {
      droppableRef.current.style.height = '100%';
    }
  }, []);

  const allClear = (): void => {
    setRoutineCards([]);
    setCards(myWorkoutsIdList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrap ref={wrapRef}>
        <DropWrap>
          <Droppable droppableId="card" direction="horizontal" type="Task">
            {(provided) => (
              <DroppableDiv
                className="test"
                ref={(ref) => {
                  droppableRef.current = ref;
                  return provided.innerRef(ref);
                }}
                {...provided.droppableProps}
              >
                {cards.map((card, index) => (
                  <CreateRoutineCard
                    key={card.id}
                    draggableId={card.id}
                    index={index}
                    workout={
                      myWorkouts.filter((el) => el.id === Number(card.id))[0]
                    }
                    clickCardBtnHandler={clickCardBtnHandler}
                    clickWorkoutCardHandler={clickWorkoutCardHandler}
                    area={'cards'}
                  />
                ))}
              </DroppableDiv>
            )}
          </Droppable>
        </DropWrap>
        <DropBox>
          <RoutineBox
            isLogin={isLogin}
            addedWorkout={addedWorkout}
            cards={routineCards}
            myWorkouts={myWorkouts}
            clickCardBtnHandler={clickCardBtnHandler}
            clickWorkoutCardHandler={clickWorkoutCardHandler}
            area={'RoutineBox'}
            saveMyRoutine={saveMyRoutine}
            setCurretRoutine={setCurretRoutine}
            dropCardIntoRoutineBox={dropCardIntoRoutineBox}
            allClear={allClear}
          />
        </DropBox>
      </Wrap>
    </DragDropContext>
  );
};

const Wrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 50px 100px 0 20px;
  margin-top: 75px;
`;

const DropWrap = styled.div`
  height: 100%;
  width: 56%;
`;

const DroppableDiv = styled.div`
  flex-wrap: wrap;
`;

const DropBox = styled.div`
  // position: relative;
  flex: 1;
  height: 100%;
  margin: 0% 2%;
  // max-width: 500px;
`;
export default CreateRoutine;
