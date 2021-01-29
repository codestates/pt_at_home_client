import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { ICard } from '../main/CreateRoutine';
import CreateRoutineCard from '../component/CreateRoutineCard';

interface IRoutineBox {
  cards: ICard[];
}

const RoutineBox = ({ cards }: IRoutineBox): JSX.Element => {
  return (
    <Wrap>
      <Droppable droppableId="RoutineBox" type="Task">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <CardWrap>
              {cards &&
                cards.map((card, index) => (
                  <CreateRoutineCard
                    key={card.id}
                    draggableId={card.id}
                    index={index}
                  />
                ))}
            </CardWrap>
          </div>
        )}
      </Droppable>
      <ContentWrap>RoutineBox</ContentWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  padding: 20px;
  background-color: #212330;
  justify-content: space-between;
  border-radius: 5px;
  position: fixed;
`;
const CardWrap = styled.div`
  background-color: #f0f0f0;
  width: 310px;
  height: 600px;
  border-radius: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 5px;
`;
const ContentWrap = styled.div`
  margin-left: 150px;
`;
export default RoutineBox;
