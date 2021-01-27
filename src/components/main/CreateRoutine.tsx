import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import CreateRoutineCard from '../component/CreateRoutineCard';
import RoutineBox from '../component/RoutineBox';
import { WorkoutOfRoutine } from '../../modules/reducers/currentRoutine';
import { Workout } from '../../modules/reducers/myWorkouts';
import {
  CreateRoutineProps,
  ChoseWorkout,
} from '../../containers/CreateRoutineContainer';
import {
  DragDropContext,
  Draggable,
  DragStart,
  Droppable,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd';

const initialChoseWorkout: ChoseWorkout = {
  id: 0,
  title: '',
  instruction: '',
  image: ['', ''],
  part: ['', ''],
  setCount: 0,
  count: 0,
  breakTime: 0,
  mySetCount: 0,
  myCount: 0,
  myBreakTime: 0,
  calrorie: 0,
  tool: '',
};

const initialAddedWorkouts: ChoseWorkout[] = [];

export interface ICard {
  id: string;
}
const reorder = (list: ICard[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const CreateRoutine = ({ myWorkouts }: CreateRoutineProps): JSX.Element => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const droppableRef = useRef<HTMLDivElement | null>(null);
  const [cards, setCards] = useState<ICard[]>([
    {
      id: '0',
    },
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
  ]);
  const [routineCards, setRoutineCards] = useState<ICard[]>([]);
  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    console.log('result : ', result);
    console.log('provided : ', provided);
    if (!result.destination) {
      return;
    }
    const sourceId = result.source.droppableId;
    const destinationId = result.destination.droppableId;
    if (sourceId === destinationId) {
      const setter = sourceId === 'RoutineBox' ? setRoutineCards : setCards;
      const _cards = reorder(
        sourceId === 'RoutineBox' ? routineCards : cards,
        result.source.index,
        result.destination.index,
      );
      setter(_cards);
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
                  />
                ))}
              </DroppableDiv>
            )}
          </Droppable>
        </DropWrap>
        <DropBox>
          <RoutineBox cards={routineCards} />
        </DropBox>
      </Wrap>
    </DragDropContext>
  );
};

const Wrap = styled.div`
  height: 100%;
  background-color: #13141c;
  display: flex;
  justify-content: space-between;
  padding: 50px 100px 0 20px;
`;
const DropWrap = styled.div`
  height: 100%;
  position: relative;
  flex: 1;
`;
const DroppableDiv = styled.div`
  flex-wrap: wrap;
`;
const DropBox = styled.div`
  position: relative;
  flex: 1;
  max-width: 600px;
`;
export default CreateRoutine;
