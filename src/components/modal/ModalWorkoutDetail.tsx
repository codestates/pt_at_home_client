import React from 'react';
import styled from 'styled-components';
import { ModalWorkoutProps } from '../../containers/DashboardContainer';
import { BiX } from 'react-icons/bi';

const ModalWorkoutDetail = ({
  myWorkouts,
  workoutDetail,
  offWorkoutModal,
  saveOrRemoveWorkout,
}: ModalWorkoutProps): JSX.Element => {
  let {
    id,
    title,
    instruction,
    category,
    tool,
    image,
    setCount,
    count,
    breakTime,
    parts,
  } = workoutDetail;

  return (
    <>
      <Layer onClick={offWorkoutModal} />
      <Frame>
        <ModalTop>
          <CloseBtn onClick={offWorkoutModal}>
            <Close />
          </CloseBtn>
        </ModalTop>
        <Title>{title.toUpperCase()}</Title>
        <Wrap>
          <ImgFrame src={image[0]} alt={title}/>
          <Description>
            <Summary>
              <Explanation>{category}</Explanation>
              <Explanation>{`${setCount} Sets`}</Explanation>
              <Explanation>
                {image.length === 1 ? `${count} sec` : `${count} 회`}
              </Explanation>
              <Explanation>{`Break Time: ${breakTime}`}</Explanation>
              <Explanation>
                {parts.map((el, idx) => {
                  if (idx === parts.length - 1) return el;
                  else return el + ', ';
                })}
              </Explanation>
              <Explanation>{`Required Tool: ${tool}`}</Explanation>
              <Instruction>{instruction}</Instruction>
            </Summary>
            <ControlBtn>
              <SaveBtn
                type="button"
                value={myWorkouts.map(el => el.id).includes(id)?"UNSAVE IT":"SAVE IT!"}
                onClick={() => saveOrRemoveWorkout(id)}
              />
            </ControlBtn>
          </Description>
        </Wrap>
      </Frame>
    </>
  );
};

const Layer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0.3;
`;

const Frame = styled.div`
  height: 500px;
  width: 800px;
  display: flex;
  flex-direction: column;
  background-color: #212121;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  transition: 400ms ease;
  position: absolute;
  left: 30%;
  top: 23%;
  padding: 5px;
  z-index: 1000;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 5px 0 0;
`;
const CloseBtn = styled.button`
  outline: none;
  font-size: 1.5rem;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff;
  }
`;
const Close = styled(BiX)`
  font-size: 30px;
  color: #ae1100;
`;
const Title = styled.div`
  width: 93%;
  color: #ffffff;
  text-align: left;
  font-size: 2.5rem;
  margin: 0 0 5px 20px;
  padding-bottom: 15px;
  border-bottom: solid 2px #32e0c4;
`;

const Wrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 1% 2.5% 2.5% 2.5%;
  height: 80%;
`;

const ImgFrameWrap = styled.div`
  width: 450px;
  height: 340px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
`;

const ImgFrame = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  width: 300px;
  padding: 0% 1.5% 0 1.5%;
  // margin:2%;
`;

const Summary = styled.ul``;

const ControlBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3px;
`;
const SaveBtn = styled.input`
  outline: none;
  font-size: 1.5rem;
  width: 200px;
  height: 50px;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff;
  }
`;

const Explanation = styled.div`
  font-size: 1rem;
  color: #ffffff;
  margin: 7px 5px 5px 5px;
  padding: 6px 10px 6px;
  border-bottom: 2px solid #f4be70;
`;

const Instruction = styled.div`
  font-size: 1rem;
  color: #ffffff;
  margin: 7px 5px 5px 5px;
  padding: 10px 10px 10px;
  border-radius: 20px;
`;
export default ModalWorkoutDetail;
