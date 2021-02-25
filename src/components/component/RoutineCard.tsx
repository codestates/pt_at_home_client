import React from 'react';
import styled from 'styled-components';
import { Routine } from '../../modules/reducers/routineList';

interface RoutineCardProps {
  routineCard: Routine;
  clickRoutineCard(id: number): void;
}

const RoutineCard = ({
  routineCard,
  clickRoutineCard,
}: RoutineCardProps): JSX.Element => {
  const routineId = routineCard?.routineId;
  const title = routineCard?.title;
  const workout = routineCard?.workout;
  return (
    <Card onClick={() => clickRoutineCard(routineId)}>
      <Title>{title.toUpperCase()}</Title>
      <Wrap>
        <ExplanationWrap>
          {workout?.map((el) => (
            <Explanation key={el.id}>{el.title?.toUpperCase()}</Explanation>
          ))}
        </ExplanationWrap>
        <SubWrap>
          <Sub>{`${
            Math.round(workout?.reduce(
              (acc, cur) => acc + (cur.image?.length < 3 ? cur.myCount : cur.myCount*1.8),
              0,
            ) / 60)
          } min`}</Sub>
          <Sub>{`${numberWithCommas(
            workout?.reduce(
              (acc, cur) =>
                acc +
                cur.calrorie *
                  (Math.round(cur.myCount / cur.myCount) *
                    Math.round(cur.mySetCount / cur.mySetCount)),
              0,
            ),
          )} kcal`}</Sub>
          <Sub>{`${workout?.length} workouts`}</Sub>
        </SubWrap>
      </Wrap>
    </Card>
  );
};

function numberWithCommas(x: number): string {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Card = styled.div`
  height: 250px;
  width: 270px;
  box-shadow: -3px -8px 7px #fff, 5px 5px 20px #9d9ea1;
  display: inline-block;
  align-items: center;
  background-color: #f2f3f7;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  padding: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 25px;
  color: #30475e;
  font-weight: 700;
  margin: 5px 35px 15px 35px;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const ExplanationWrap = styled.div`
  height: 165px;
  width: 130px;
  display: flex;
  padding-top: 5px;
  flex-direction: column;
  align-items: center;
  margin-top:10px;
  margin-right: 20px;
  overflow-y: scroll;
  background-color: #e9eef5;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  border-radius: px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #30475e;
    border-radius: 6px;
  }
`;
const SubWrap = styled.div`
  margin-top:10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Explanation = styled.div`
  font-size: 13px;
  line-height:1.2;
  color: #000000;
  width: 110px;
  background-color: #f0f0f0;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  margin: 0px 5px 4px 0px;
  padding: 3px 20px 4px;
  border-radius: 5px;
`;
const Sub = styled.div`
  font-size: 16px;
  color: #555555;
  font-weight: 700;
  margin: 5px 5px 4px 0px;
  padding: 3px 0 4px;
`;

export default RoutineCard;
