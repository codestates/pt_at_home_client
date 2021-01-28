import React from 'react';
import styled from 'styled-components'
import { MyWorkoutCardProps } from '../modal/ModalRoutineDetail'
import Img from '../../img/urbanbrush-20190214083430029790.png';


const _WorkoutCard = ({myWorkoutCard}:MyWorkoutCardProps) => {
  const {title, mySetCount, myCount, tool, part, category, image} = myWorkoutCard
    return (
      // <Wrap>
        <Card>
          <CardImgWrap>
            <CardImg src={image[0]}/>
          </CardImgWrap>
          <CardContents>
            <Title>{title.toUpperCase()}</Title>
            <ExplanationWrap>
              <Explanation>{myWorkoutCard.image.length === 1?`${myCount} sec`:`${myCount} 회`}</Explanation>
              <Explanation>{`${mySetCount} Sets`}</Explanation>
              <Explanation>{part.map((el, idx) => {
                if (idx === part.length-1) return el
                else return el+', '
              })}</Explanation>
            </ExplanationWrap>
          </CardContents>
        </Card>
      // </Wrap>
      );
    };

    const Card = styled.div`
      width:220px;
      height:110px;
      align-items:center;
      box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
      display: flex;
      background-color: #212330;
      border-radius: 4px;
      margin-top:7px;
      transition: 400ms ease;
    `;

    const CardImgWrap = styled.div``;

    const CardImg = styled.img`
      width: 100px;
      height:100px;
      border-radius: 5px;
      padding:10%;
    `;

    const CardContents = styled.div`
      padding: 0 10px 0 0;
      width:120px;
      height
    `;

    const Title = styled.h1`
      font-size: 20px;
      text-align:center;
      color: #f0f0f0;
      padding-top:5%;
    `;

    const ExplanationWrap = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top:5%;
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