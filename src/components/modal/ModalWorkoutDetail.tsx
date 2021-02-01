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
        <Top>
          <Title>{title.toUpperCase()}</Title>
          <CloseBtn onClick={offWorkoutModal}>
            <Close />
          </CloseBtn>
        </Top>
        <Wrap>
          <ImgFrame src={image[0]} alt={title} />
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
                value={
                  myWorkouts.map((el) => el.id).includes(id)
                    ? 'UNSAVE'
                    : 'SAVE !'
                }
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0.6;
`;

const Frame = styled.div`
  height: 500px;
  width: 800px;
  display: flex;
  flex-direction: column;
  background-color: #e0e5ec;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  transition: 400ms ease;
  position: fixed;
  left: 30%;
  top: 23%;
  padding: 5px;
  z-index: 1000;
`;

const Top = styled.div`
  font-weight: 700;
  display: flex;
  margin: 0px 20px;
  padding: 5px 0px 5px 5px;
  border-bottom: 3px solid #00587a;
  width: 93%;
`;
const CloseBtn = styled.button`
  outline: none;
  font-size: 1.5rem;
  width: 40px;
  height: 30px;
  display: flex;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background-color: #d9e8fd;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
  }
`;
const Close = styled(BiX)`
  font-size: 30px;
  color: #304752;
`;
const Title = styled.div`
  width: 100%;
  color: #30475e;
  text-align: left;
  font-size: 2.5rem;
  margin: 0px 0px 0px 0px;
  padding: 5px 0px 10px 10px;
`;

const Wrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 1% 2.5% 2.5% 2.5%;
  height: 80%;
`;

const ImgFrame = styled.img`
  width: 60%;
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
  font-weight: 700;
  width: 200px;
  height: 50px;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background-color: #d9e8fd;
  color: #30475e;
  box-shadow: -5px -5px 20px #e0e5ec, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #e0e5ec, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
  }
`;

const Explanation = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #555555;
  margin: 7px 5px 5px 5px;
  padding: 6px 10px 6px;
  border-bottom: 1px solid #00587a;
`;

const Instruction = styled.div`
  color: #555555;
  font-size: 20px;
  font-weight: 700;
  margin: 7px 5px 5px 5px;
  padding: 10px 10px 10px;
  border-radius: 20px;
  line-height: 19px;
`;
export default ModalWorkoutDetail;
