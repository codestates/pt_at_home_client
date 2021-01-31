import React, { useState } from 'react';
import styled from 'styled-components';
import { GoHeart } from 'react-icons/go';
import { Workout } from '../../modules/reducers/workoutList';
import Img from '../../img/urbanbrush-20190214083430029790.png';

interface WorkoutCardProps {
  workoutCard: Workout;
  clickWorkoutCard(id: number): void;
}

const WorkoutCard = ({
  workoutCard,
  clickWorkoutCard,
}: WorkoutCardProps): JSX.Element => {
  const [color, setColor] = useState<boolean>(false);
  const ChangeColor = () => {
    setColor(!color);
  };
  return (
    <CardDiv onClick={() => clickWorkoutCard(workoutCard.id)}>
      <Card>
        <CardImgWrap>
          <CardImg src={workoutCard.image[1]} />
        </CardImgWrap>
        <CardContents>
          <Marker
            onClick={(e) => {
              e.stopPropagation();
              ChangeColor();
            }}
            changeColor={color}
          />
          <Title>{workoutCard.title}</Title>
          <Part>{workoutCard.part.map((el) => `${el}, `)}</Part>
          <Explanation>{workoutCard.instruction}</Explanation>
        </CardContents>
      </Card>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  color: currentColor;
  text-decoration: none;
  display: inline-table;
`;
const Card = styled.div`
  width: 320px;
  display: block;
  background-color: #f0f0f0;
  border-radius: 5px;
  transition: 400ms ease;
`;
const CardImgWrap = styled.div`
  height: 225px;
`;
const CardImg = styled.img`
  width: 100%;
  border-radius: 5px 5px 0px 0px;
`;
const CardContents = styled.div`
  position: relative;
  background: #f0f0f0;
  padding: 15px 25px 25px 25px;
  border-radius: 0 0 5px 5px;
`;
const Title = styled.h1`
  font-size: 22px;
  color: #000000;
  margin: 0 0 5px 0;
`;
const Part = styled.div`
  font-size: 12px;
  color: #808080;
  margin: 0 0 10px 0;
`;
const Explanation = styled.p`
  font-size: 14px;
  color: #000000;
  margin: 0 0 10px 0px;
  line-height: 18px;
`;
const Marker = styled(GoHeart)`
  font-size: 30px;
  background: #446cb3;
  color: ${(props: { changeColor: boolean }) =>
    props.changeColor ? '#ff0000' : '#ffffff'};
  padding: 5px 5px;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: -15px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
  transition: 400ms ease;
  cursor: pointer;
`;

export default WorkoutCard;
