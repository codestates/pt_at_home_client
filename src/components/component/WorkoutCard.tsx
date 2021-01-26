import React from 'react';
import styled from 'styled-components';
import { GoHeart } from 'react-icons/go';
import Img from '../../img/urbanbrush-20190214083430029790.png';

interface Workout {
  id:number;
  title:string;
  instruction:string;
  image:string[];
  part:string[];
  setCount:number;
  count:number;
  breakTime: number;
  calrorie: number;
  tool: string;
}

interface WorkoutCardProps {
  workoutCard:Workout
}


const WorkoutCard = ({workoutCard}:WorkoutCardProps):JSX.Element => {
  return (
    <CardDiv>
      <Card>
        <CardImgWrap>
          <CardImg src={workoutCard.image[0]} />
        </CardImgWrap>
        <CardContents>
          <Marker />
          <Title>{workoutCard.title}</Title>
          <Explanation>
            {workoutCard.instruction}
          </Explanation>
        </CardContents>
        <CardFooter>
          <CardExercise>{workoutCard.part.map(el => `${el}, `)}</CardExercise>
        </CardFooter>
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
  width: 270px;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  display: block;
  background-color: #212330;
  border-radius: 4px;
  transition: 400ms ease;
`;
const CardImgWrap = styled.div`
  height: 225px;
`;
const CardImg = styled.img`
  width: 100%;
  border-radius: 4px 4px 0px 0px;
`;
const CardContents = styled.div`
  position: relative;
  background: #212330;
  padding: 15px 25px 5px 25px;
`;
const CardFooter = styled.div`
  padding: 10px 25px 10px 25px;
  border-radius: 0px 0px 4px 4px;
  border-top: 1px solid #000000;
  background: #30323d;
  color: #f0f0f0;
  display: inline-table;
  width: 100%;
  box-sizing: border-box;
  transition: 400ms ease;
`;
const Title = styled.h1`
  font-size: 22px;
  color: #f0f0f0;
  margin: 0 0 15px 0;
`;
const Explanation = styled.p`
  font-size: 14px;
  color: #f0f0f0;
  margin: 0 0 10px 0px;
`;
const CardExercise = styled.h5`
  margin: 0;
`;
const Marker = styled(GoHeart)`
  font-size: 30px;
  background: #446cb3;
  color: #fff;
  padding: 5px 5px;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  top: -22px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
  transition: 400ms ease;
  cursor: pointer;
  &:active {
    color: #ff0000;
  }
`;

export default WorkoutCard;