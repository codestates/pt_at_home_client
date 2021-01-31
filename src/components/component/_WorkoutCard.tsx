import React from 'react'
import styled from 'styled-components'
import { MyWorkoutCardProps } from '../modal/ModalRoutineDetail'
const breakTimeImage = 'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%B2%E1%84%89%E1%85%B5%E1%86%A8.jpeg'

const _WorkoutCard = ({myWorkoutCard}:MyWorkoutCardProps) => {
  const {title, mySetCount, myCount, tool, parts, category, image} = myWorkoutCard
    return (
      <>
        <Card>
          <CardImgWrap>
            <CardImg src={image?image[1]:breakTimeImage}/>
          </CardImgWrap>
          <CardContents>
            <Title>{title?.toUpperCase()}</Title>
            <ExplanationWrap>
              <Explanation>{myWorkoutCard.image?.length === 1?`${myCount} sec`:`${myCount} 회`}</Explanation>
              <Explanation>{`${mySetCount} Sets`}</Explanation>
              <Explanation>{parts?.map((el, idx) => {
                if (idx === parts?.length-1) return el
                else return el+', '
              })}</Explanation>
            </ExplanationWrap>
          </CardContents>
        </Card>
      </>
      );
    };

const Card = styled.div`
  width: 225px;
  height: 110px;
  align-items: center;
  display: flex;
  background-color: #212330;
  border-radius: 10px;
  margin-top: 7px;
  transition: 400ms ease;
`;

const CardImgWrap = styled.div``;

const CardImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  padding: 10%;
`;

const CardContents = styled.div`
  padding: 0 10px 0 0;
  width: 120px;
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  color: #f0f0f0;
  padding-top: 5%;
`;

const ExplanationWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
`;

const Explanation = styled.div`
  font-size: 14px;
  color: #f0f0f0;
  background-color: #30323d;
  margin: 0 0 4px 0px;
  width: 80%;
  padding: 3px 0 4px 0;
  border-radius: 5px;
`;

export default _WorkoutCard;
