import React from 'react';
import styled from 'styled-components';

interface WorkoutOfRoutine {
  id:number;
  title:string;
  instruction:string;
  image:string[];
  part:string[];
  mySetCount:number;
  myCount:number;
  myBreakTime: number;
  calrorie: number;
  tool: string;
}

interface Routine {
  routineId: number;
  title: string;
  workout: Array<WorkoutOfRoutine>;
}

interface RoutineCardProps {
  routineCard: Routine;
}

const RoutineCard = ({ routineCard }: RoutineCardProps): JSX.Element => {
  return (
    <Card>
      <>
        <Title>아침운동</Title>
      </>
      <Wrap>
        <ExplanationWrap>
          <Explanation>PLANK</Explanation>
          <Explanation>PLANK</Explanation>
          <Explanation>PLANK</Explanation>
          <Explanation>PLANK</Explanation>
        </ExplanationWrap>
        <SubWrap>
          <Sub>5 min</Sub>
          <Sub>1.000 kcal</Sub>
          <Sub>기타등등...</Sub>
        </SubWrap>
      </Wrap>
    </Card>
  );
};

const Card = styled.div`
  height: 200px;
  margin: 5% auto;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  display: inline-block;
  align-items: center;
  background-color: #212330;
  border-radius: 4px;
  transition: 400ms ease;
  position: relative;
  padding: 10px;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  color: #f0f0f0;
  margin: 5px 35px 15px 35px;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;
const ExplanationWrap = styled.div`
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 6px;
  }
`;
const SubWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Explanation = styled.div`
  font-size: 14px;
  color: #f0f0f0;
  background-color: #30323d;
  margin: 0px 5px 4px 0px;
  padding: 3px 20px 4px;
  border-radius: 5px;
`;
const Sub = styled.div`
  font-size: 14px;
  color: #f0f0f0;
  margin: 0 0 4px 0px;
  padding: 3px 0 4px;
`;

export default RoutineCard;
