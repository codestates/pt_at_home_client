import React, { useState } from 'react';
import styled from 'styled-components'
import { Workout } from '../../modules/reducers/workoutList'
import { CustomWorkout } from '../../containers/CreateRoutineContainer'

interface ModalCustomizeWorkoutProps {
    workout:Workout
    offModalCustomWorkout():void;
    editMyWorkout({mySetCount, myCount, myBreakTime}:CustomWorkout):void;
}

const ModalCustomizeWorkout = ({workout, offModalCustomWorkout, editMyWorkout}:ModalCustomizeWorkoutProps):JSX.Element => {
    const [myCount, setMyCount] = useState(String(workout.myCount))
    const [mySetCount, setMySetCount] = useState(String(workout.mySetCount))
    const [myBreakTime, setMyBreakTime] = useState(String(workout.myBreakTime))
    const [alertMsg, setAlertMsg] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        if (e.target.name === 'mySetCount') setMySetCount(e.target.value)
        else if (e.target.name === 'myCount') setMyCount(e.target.value)
        else if (e.target.name === 'myBreakTime') setMyBreakTime(e.target.value)
    }

    const clickSaveHandler = () => {
        let numSetCount = Number(mySetCount)
        let numCount = Number(myCount)
        let numBreakTime = Number(myBreakTime)
        if (numSetCount && numCount && numBreakTime) {
            editMyWorkout({mySetCount:numSetCount, myCount:numCount, myBreakTime:numBreakTime})
        } else {
            setAlertMsg('숫자로만 입력을 해야 합니다!')
        } 
    }
   
    return (
        <Frame>
            <Wrap>
                <CloseBtn><XBtn type="button" value="X" onClick={offModalCustomWorkout}/></CloseBtn>
                <Title>{workout.title.toUpperCase()}</Title>
                <Msg>나에게 맞는 운동량을 설정해보세요.</Msg>
                <SettingBox>
                    <EachInput>
                        <LabelTag htmlFor="mySetCount">세트</LabelTag>
                        <InputTag type="text" name='mySetCount'  value={mySetCount} onChange={handleChange} />
                    </EachInput>
                    <EachInput>
                        <LabelTag htmlFor="myCount">{workout.image.length === 2?'시간(초)':'횟수'}</LabelTag>
                        <InputTag type="text" name='myCount'  value={myCount} onChange={handleChange}/>
                    </EachInput>
                    <EachInput>
                        <LabelTag htmlFor="myBreakTime">{'휴식시간(초)'}</LabelTag>
                        <InputTag type="text" name='myBreakTime'  value={myBreakTime} onChange={handleChange}/>
                    </EachInput>
                </SettingBox>
                <AlertMsg>{alertMsg}</AlertMsg>
                <ControlBtn>
                    <SaveBtn type="button" value='SAVE' onClick={clickSaveHandler}/>
                </ControlBtn>
            </Wrap>
        </Frame>
    );
};

const Frame = styled.div`
  height: 280px;
  width: 420px;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  display: inline-block;
  background-color: #f2f3f7;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  transition: 400ms ease;
  position: absolute;
  margin-left:30%;
  margin-top:200px;
  left:252px;
  padding: 5px;
  z-index:1;
`;

const Wrap = styled.div`
    display:flex;
    flex-flow: column nowrap;
    justify-content:space-between;
    height:100%;
`

const CloseBtn = styled.div`
    padding-top:2%;
    padding-right:2%;
    text-align:right;
`
const Title = styled.div`
    font-size:1.5rem;
    text-align:center;
`

const Msg =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:2%;
    height:30px;
    font-size:0.9rem;
`

const SettingBox = styled.div`
    display:flex;
    flex-flow:column nowrap;
    justify-content:space-between;
    
`

const EachInput = styled.div`
    display:flex;
    justify-content:space-between;
    margin:1%;
    padding:3px;
`

const LabelTag = styled.label`
    text-align:right;
    width:100px;
    padding-top:3px;
    diplay:flex;
`

const InputTag = styled.input`
    margin:0 15px;
    flex-grow:1
`

const ControlBtn = styled.div`
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-evenly;
    margin:2% 0% ;
`

const XBtn = styled.input`
    color:red;
    font-weight:bold;
    outline: none;
    width: 27px;
    height: 27;
    background-color: #f2f3f7;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    box-shadow: -3px -8px 7px #fff, 5px 5px 20px #9d9ea1;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
    }
    &:active {
        box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
    }
`

const SaveBtn = styled.input`
    border-radius:20px;
    text-decoration: none;
    color: #555555;
    padding:2% 5%;
    // background-color:#636e72;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: #f2f3f7;
    box-shadow: -3px -8px 7px #fff, 5px 5px 20px #9d9ea1;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
      }
      &:active {
        box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
      }
`;

const AlertMsg = styled.div`
    color:red;
    text-align:center;
`
export default ModalCustomizeWorkout;