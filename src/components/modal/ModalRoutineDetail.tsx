import React from 'react';
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { WorkoutOfRoutine } from '../../modules/reducers/routineList'
import { ModalRoutineProps } from '../../containers/DashboardContainer'
import _WorkoutCard from '../component/_WorkoutCard'

export interface MyWorkoutCardProps {
    myWorkoutCard:WorkoutOfRoutine
}

const ModalRoutineDetail = ({
    routineDetail,
    offRoutineModal,
    saveOrRemoveRoutine,
}:ModalRoutineProps):JSX.Element => {
    const location = useLocation()
    function numberWithCommas(x:number):string {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

    return (
        <Frame>
            <ModalTop>
                <CloseBtn><input type="button" value="X" onClick={offRoutineModal}/></CloseBtn>
            </ModalTop>
            <Title>{routineDetail.title}</Title>
            <Main>
                <CardList>{routineDetail.workout.map((el) => 
                    <_WorkoutCard 
                        key={el.id}
                        myWorkoutCard={el}
                    />)}</CardList>
                <Description>
                    <Summary>
                        <Explanation>{`${(routineDetail.workout.reduce((acc, cur) => acc+(cur.image.length === 2?cur.myCount:0), 0))/60} Min`}</Explanation>
                        <Explanation>{`${numberWithCommas(routineDetail.workout.reduce((acc, cur) => acc + (cur.calrorie*(Math.round(cur.myCount/cur.count)*Math.round(cur.mySetCount/cur.setCount))), 0))} kcal`}</Explanation>
                        <Explanation>hello</Explanation>
                        <Explanation>hello</Explanation>
                    </Summary>
                    <ControlBtn>
                        <SaveBtn type="button" value={location.pathname==='/dashboard'?'SAVE':'DELETE'} onClick={() => {saveOrRemoveRoutine(routineDetail.routineId)}}/>
                    </ControlBtn>
                </Description>
            </Main>
            
        </Frame>
    );
};

const Frame = styled.div`
  height: 600px;
  width: 500px;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  display: inline-block;
  background-color: white;
  border-radius: 4px;
  transition: 400ms ease;
  position: absolute;
  margin-left:30%;
  margin-right:30%;
  margin-top:50px;
  left:200px;
  right:100px;
  padding: 5px;
  z-index:1;
`;

const Title = styled.div`
    height:50px;
    text-align:center;
    padding-top:3%;
    font-size:2rem;
`
const ModalTop = styled.div`    
    display:flex;
    justify-content:flex-end;
`

const CloseBtn = styled.div`
    padding-top:2%;
    padding-right:2%;
`

const Main = styled.div`
    display:flex;
    justify-content:space-evenly;
    fles-flow:row nowrap;
    align-items: stretch;
    height:78%;
`

const CardList =styled.div`
    border:1px solid red;
    width:260px;
    margin:2%;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      border-radius: 6px;
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 6px;
    }

`

const Description = styled.div`
    display:flex;
    justify-content:space-between;
    flex-flow:column nowrap;
    border:1px solid blue;
    width:200px;
    padding:5px;
    margin:2%;
`

const Summary = styled.div`

`

const ControlBtn = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:15px;
`
const SaveBtn = styled.input`
`

const Explanation = styled.div`
    font-size: 1.3rem;
    color: #f0f0f0;
    background-color: #30323d;
    margin: 0px 5px 4px 0px;
    padding: 10px 20px 10px;
    border-radius: 5px;
`;


export default ModalRoutineDetail;