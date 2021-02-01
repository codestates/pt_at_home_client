import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Img from '../../img/urbanbrush-20190214083430029790.png';
import { Workout } from '../../modules/reducers/workoutList';
import { WorkoutOfRoutine } from '../../modules/reducers/routineList';
import { BiX, BiBulb } from 'react-icons/bi';

interface ICreateCard {
  draggableId: string;
  index: number;
  workout: Workout;
  area: string;
  clickCardBtnHandler(area: string, workout: Workout): void;
  clickWorkoutCardHandler(area: string, workout: Workout): void;
}

const CreateRoutineCard = ({
  draggableId,
  index,
  workout,
  area,
  clickCardBtnHandler,
  clickWorkoutCardHandler,
}: ICreateCard): JSX.Element => {
  const title = workout?.title;
  const image = workout?.image;
  const setCount = workout?.setCount;
  const count = workout?.count;
  const parts = workout?.parts;
  const tool = workout?.tool;
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <DraggableWrap
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card onClick={() => clickWorkoutCardHandler(area, workout)}>
            <CardImgWrap>
              <CardImg src={workout ? image[1] : ''} />
            </CardImgWrap>
            <CardContents>
              <CardTop>
                <Title>{title?.toUpperCase()}</Title>
                <GearBtn
                  onClick={(e) => {
                    e.stopPropagation();
                    clickCardBtnHandler(area, workout);
                  }}
                >
                  {area === 'cards' ? <Close /> : <Info />}
                </GearBtn>
              </CardTop>

              <ExplanationWrap>
                <Explanation>
                  {image?.length === 1 ? `${count} 초` : `${count} 회`}
                </Explanation>
                <Explanation>{`${setCount} 세트`}</Explanation>
                <Explanation>
                  {parts?.map((el, idx) => {
                    if (idx === parts.length - 1) return el;
                    else return el + ', ';
                  })}
                </Explanation>
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
  // margin: 0 30px 15px 0;
  margin: 1.2% 1.2%;
  width: 280px;
  height: 130px;
`;
const Card = styled.div`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f5f5;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
  }
`;

const CardImgWrap = styled.div``;
const CardImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 5px;
  margin: 10px;
`;
const CardContents = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 150px;
  padding: 0 10px 0 0;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 15px 5px;
`;
const Title = styled.h1`
  font-size: 18px;
  color: #000000;
`;

const GearBtn = styled.button`
  outline: none;
  width: 25px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background-color: #f6f5f5;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  padding: 0;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
  }
`;

const ExplanationWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Explanation = styled.div`
  font-size: 14px;
  color: #000000;
  background-color: #d6e6ea;
  margin: 0 0 4px 0px;
  width: 100%;
  padding: 3px 5px 3px 10px;
  border-radius: 5px;
`;
const Close = styled(BiX)`
  font-size: 20px;
  color: #000000;
`;
const Info = styled(BiBulb)`
  font-size: 20px;
  color: #000000;
`;

export default CreateRoutineCard;
