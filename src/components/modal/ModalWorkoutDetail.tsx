import React from 'react';
import styled from 'styled-components';
import { Workout } from '../../modules/reducers/workoutList';
import { ModalWorkoutProps } from '../../containers/DashboardContainer';

const ModalWorkoutDetail = ({
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
    part,
  } = workoutDetail;
  return (
    <>
      <Layer onClick={offWorkoutModal} />
      <Frame>
        <ModalTop>
          <input type="button" value="X" onClick={offWorkoutModal} />
        </ModalTop>
        <Title>{title.toUpperCase()}</Title>
        <Wrap>
          <ImgFrame src={image[0]} />
          <Description>
            <Summary>
              <Explanation>{category}</Explanation>
              <Explanation>{`${setCount} Sets`}</Explanation>
              <Explanation>
                {image.length === 1 ? `${count} sec` : `${count} 회`}
              </Explanation>
              <Explanation>{`Break Time: ${breakTime}`}</Explanation>
              <Explanation>
                {part.map((el, idx) => {
                  if (idx === part.length - 1) return el;
                  else return el + ', ';
                })}
              </Explanation>
              <Explanation>{`Required Tool: ${tool}`}</Explanation>
              <Instruction>{instruction}</Instruction>
            </Summary>
            <ControlBtn>
              <SaveBtn
                type="button"
                value="SAVE IT!"
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
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0;
`;

const Frame = styled.div`
  height: 500px;
  width: 800px;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  transition: 400ms ease;
  position: absolute;
  left: 25%;
  top: 25%;
  padding: 5px;
  z-index: 1000;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 5px 0 0;
`;

const Title = styled.div`
  width: 200px;
  text-align: center;
  font-size: 2.5rem;
  margin-top: 1%;
`;

const Wrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 1% 2.5% 2.5% 2.5%;
  height: 80%;
`;

const ImgFrame = styled.img`
  width: 450px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #ddd;
  // background-color:#EDE7D9;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
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
  font-size: 1.5rem;
  width: 200px;
  height: 50px;
`;

const Explanation = styled.div`
  font-size: 1rem;
  color: #f0f0f0;
  background-color: #30323d;
  margin: 7px 5px 5px 5px;
  padding: 6px 10px 6px;
  border-radius: 5px;
`;

const Instruction = styled.div`
  font-size: 1rem;
  color: #f0f0f0;
  background-color: #30323d;
  margin: 7px 5px 5px 5px;
  padding: 10px 10px 10px;
  border-radius: 5px;
`;
export default ModalWorkoutDetail;
