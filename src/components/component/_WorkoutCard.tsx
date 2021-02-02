import React from 'react';
import styled from 'styled-components';
import { MyWorkoutCardProps } from '../modal/ModalRoutineDetail';
const breakTimeImage =
  'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%B2%E1%84%89%E1%85%B5%E1%86%A8.jpeg';

const _WorkoutCard = ({ myWorkoutCard }: MyWorkoutCardProps) => {
  const {
    title,
    mySetCount,
    myCount,
    tool,
    parts,
    category,
    image,
  } = myWorkoutCard;
  return (
    <>
      <Card>
        <CardImgWrap>
          <CardImg src={image ? image[1] : breakTimeImage} />
        </CardImgWrap>
        <CardContents>
          <Title>{title?.toUpperCase()}</Title>
          <ExplanationWrap>
            <Explanation>
              {myWorkoutCard.image?.length === 1
                ? `${myCount} sec`
                : `${myCount} 회`}
            </Explanation>
            <Explanation>{`${mySetCount} Sets`}</Explanation>
            <Explanation>
              {parts?.map((el, idx) => {
                if (idx === parts?.length - 1) return el;
                else return el + ', ';
              })}
            </Explanation>
          </ExplanationWrap>
        </CardContents>
      </Card>
    </>
  );
};

const Card = styled.div`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f3f7;
  border: none;
  border-radius: 10px;
  height: 100px;
  width: 225px;
  box-shadow: -3px -3px 7px #fff, 5px 5px 20px #9d9ea1;
  transition: all 0.2s ease-in-out;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
  }
`;

const CardImgWrap = styled.div`
  height: 100px;
`;

const CardImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px 0 0 10px;
`;

const CardContents = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 150px;
  height: 100%;
  padding: 5px 10px 5px 5px;
`;

const Title = styled.h1`
  font-size: 18px;
  color: #30475e;
  font-weight: 700;
`;

const ExplanationWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
`;

const Explanation = styled.div`
  font-size: 14px;
  color: #555555;
  font-weight: 700;
  width: 100%;
  border-radius: 5px;
`;

export default _WorkoutCard;
