import React from 'react';
import styled from 'styled-components';
import { GoHeart } from 'react-icons/go';
import Img from '../../img/urbanbrush-20190214083430029790.png';
const Warp = styled.div`
  height: 100%;
  background-color: #13141c;
  overflow-y: scroll;
`;
const BodyWrap = styled.div`
  width: 1480px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
const CardWrap = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
const Cardli = styled.li`
  width: 300px;
  height: 372px;
  margin: 35px;
`;
const CardDiv = styled.div`
  color: currentColor;
  text-decoration: none;
  display: inline-table;
`;
const Card = styled.div`
  width: 300px;
  margin: 5% auto;
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

const Dashboard = () => {
  return (
    <Warp>
      <BodyWrap>
        <CardWrap>
          <Cardli>
            <CardDiv>
              <Card>
                <CardImgWrap>
                  <CardImg src={Img} />
                </CardImgWrap>
                <CardContents>
                  <Marker />
                  <Title>운동 이름</Title>
                  <Explanation>
                    이제 이곳에는 이 운동이 어떤운동인지 설명이나 운동 방법
                    같은것을 적는 공간 일단 왜 때문인지 길게 적어야 할것 같아서
                    일단 아무말이나 적어보는 중
                  </Explanation>
                </CardContents>
                <CardFooter>
                  <CardExercise>이곳은 어느 부위인지</CardExercise>
                </CardFooter>
              </Card>
            </CardDiv>
          </Cardli>
        </CardWrap>
      </BodyWrap>
    </Warp>
  );
};

export default Dashboard;
