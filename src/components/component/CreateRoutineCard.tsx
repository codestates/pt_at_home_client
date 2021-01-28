import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Img from '../../img/urbanbrush-20190214083430029790.png';
import { WorkoutOfRoutine } from '../../modules/reducers/routineList' 

interface ICreateCard {
  draggableId: string;
  index: number;
}

interface CreateRoutineCardProps {
  test:string;
}

const CreateRoutineCard = ({
  draggableId,
  index,
}: ICreateCard): JSX.Element => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <DraggableWrap
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card>
            <CardImgWrap>
              <CardImg src={Img} />
            </CardImgWrap>
            <CardContents>
              <>
                <Title>PLANK</Title>
              </>
              <ExplanationWrap>
                <Explanation>60s</Explanation>
                <Explanation>3set</Explanation>
                <Explanation>코어, 복근</Explanation>
              </ExplanationWrap>
            </CardContents>
          </Card>
        </DraggableWrap>
      )}
    </Draggable>
  );
};

const DraggableWrap = styled.div`
  color: currentColor;
  text-decoration: none;
  display: inline-table;
  outline: none;
  margin: 0 30px 15px 0;
  width: 280px;
  height: 130px;
`;
const Card = styled.div`
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  background-color: #212330;
  border-radius: 4px;
  transition: 400ms ease;
`;
const CardImgWrap = styled.div``;
const CardImg = styled.img`
  width: 100px;
  border-radius: 5px;
  margin: 10px;
`;
const CardContents = styled.div`
  position: relative;
  padding: 0 10px 0 0;
`;
const Title = styled.h1`
  font-size: 25px;
  color: #f0f0f0;
  margin: 5px 35px 15px 35px;
`;
const ExplanationWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Explanation = styled.div`
  font-size: 14px;
  color: #f0f0f0;
  background-color: #30323d;
  margin: 0 0 4px 0px;
  width: 100%;
  padding: 3px 3px 4px 10px;
  border-radius: 5px;
`;
export default CreateRoutineCard;
