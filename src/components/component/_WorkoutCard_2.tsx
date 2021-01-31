import React, {useRef} from 'react'
import styled from 'styled-components'
import { MyWorkoutCardProps } from '../modal/ModalRoutineDetail'

const _WorkoutCard_2 = ({myWorkoutCard}:MyWorkoutCardProps) => {
  const {title, mySetCount, myCount, tool, parts, category, image} = myWorkoutCard


    return (
      // <Wrap>
        <Card>
          <CardImgWrap>
            <CardImg src={image[1]}/>
          </CardImgWrap>
          <CardContents>
            <Title>{title.toUpperCase()}</Title>
            <ExplanationWrap>
              <Explanation>{myWorkoutCard.image.length === 1?`${myCount} sec`:`${myCount} 회`}</Explanation>
              <Explanation>{`${mySetCount} Sets`}</Explanation>
              <Explanation>{parts.map((el, idx) => {
                if (idx === parts.length-1) return el
                else return el+', '
              })}</Explanation>
            </ExplanationWrap>
          </CardContents>
        </Card>
      // </Wrap>
      );
    };

const Card = styled.div`
  width:100%;
  height:100%;
  display: flex;
  align-items:center;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  // background-color: none;
  border-radius: 10px;
  // margin-bottom:70px;
  // transition: 400ms ease;
`

const CardImgWrap = styled.div``;

const CardImg = styled.img`
  width: 150px;
  height:130px;
  border-radius: 15px;
  padding:10%;
`;

const CardContents = styled.div`
  padding: 0 10px 0 0;
  width:80%;
  height:80%;
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
  font-size: 1rem;
  color: #f0f0f0;
  background-color: #30323d;
  margin: 0 0 4px 0px;
  width: 100%;
  padding: 3px 0 4px 4px;;
  border-radius: 5px;
`;

export default _WorkoutCard_2;