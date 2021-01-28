import React, { useState, useEffect, useMemo } from 'react';
import { CurrentRoutineProps } from '../../containers/RunRoutineContainer'
import styled from 'styled-components';
import CreateRoutineCard from '../component/CreateRoutineCard'

type SetInterval=ReturnType<typeof setInterval>


const RunRoutine = ({
    currentRoutine,

}:CurrentRoutineProps):JSX.Element => {
    const initialInterve:SetInterval | any = undefined
    let {routineId, title, workout} = currentRoutine
    let [counter, setCounter] = useState(0)
    let [routineOrder, setRoutineOrder] = useState(0)
    let [intervCounter, setIntervCounter] = useState(initialInterve)
    let [intervImg, setIntervImg] = useState(initialInterve)
    let [status, setStatus] = useState('ready')
    let [imgIdx, setImgIdx] = useState(1)
    let [repeat, setRepeat] = useState('ready')
    let imgList = workout[routineOrder].image
    let currentWorkout = workout[routineOrder]
    let totalCount = workout[routineOrder].myCount
    let breakCount = workout[routineOrder].myBreakTime
    let num = useMemo(() => routineOrder+1, [routineOrder])

    useEffect(() => {
        if (counter === totalCount + 1 && (status === 'start' || status === 'resume')) {
            setCounter(0)
            return () => {
                setIntervCounter(clearInterval(intervCounter))
                setIntervImg(clearInterval(intervImg))
                if (num < workout.length) {
                    setTimeout(() => setStatus('break'), 2000)
                } else {
                    setStatus('finish')
                }
            }   
        } else if (counter === breakCount+1 && (status === 'break')) {
            setCounter(0)
            return () => {
                setIntervCounter(clearInterval(intervCounter))
                if (num < workout.length) {
                    setRoutineOrder(num)
                    setTimeout(() => setStatus('start'), 2000)
                }
            }
        }
    }, [counter])

    useEffect(() => {
        if (status === 'start') {
            runWorkout()
        } else if (status === 'break') {
            breakCounter()
        } else if (status === 'finish') {
            setCounter(0)
            setIntervCounter(clearInterval(intervCounter))
            setIntervImg(clearInterval(intervImg))
        } else if (status === 'resume' && repeat === 'repeat') {
            setIntervImg(setInterval (() => setImgIdx(imgIdx++), 1500))
        } else if (status === 'resume') {
            setIntervCounter(setInterval(() => setCounter(counter++), 1000))
        } else if (status === 'pause') {
            setIntervCounter(clearInterval(intervCounter))
            setIntervImg(clearInterval(intervImg))
        } else if (status === 'pauseBreak') {
            setIntervCounter(clearInterval(intervCounter))
        }
    }, [status])


    // start 를 누르면 status 를 start로 바꾼다
    // staus 가 start 면 runworkout을 실행한다
    // runworkout 이 실행 될 때 조건에 의해서 count 방식이 결정된다
    // count 방식이 초이면 1초 마다 counter 가 1씩 증가한다. 
    // count 방식이 동작이면 1.5초 마다 이미지 배열에 인덱스가 순서대로 증가한다. 
    // 이미지 배열을 다 돌면 counter 가 1씩 증가한다. 
    // counter 가 totalCount 와 같을때 routineOrder 가 workout.length 보다 작으면 routineOrder가 증가한다. 
    // routineOrder 가 증가하면 현재 운동이 재설정 된다. 
    // breakTime이 다 돌면 다시 runworkout 이 실행된다. 

    let currentImg = imgIdx === imgList.length? imgList[0]:imgList[imgIdx]
    let actionCounter = useMemo(() => counter+1, [counter])

    useEffect(() => {
        if (repeat === 'repeat') {
            console.log('repeat')
            setIntervImg(setInterval (() => setImgIdx(imgIdx++), 1500))
        }
        if (repeat === 'next') {
            if (counter === totalCount) {
                console.log('next', counter)
                // setCounter(0)
                setTimeout(()=>setRepeat('stop'), 1500)
            } else {
                setCounter(counter++)
                setRepeat('repeat')
            }
        } if (repeat === 'stop') {
            console.log('stop') 
            setCounter(0)
            setRepeat('ready')
            if (num < workout.length) {
                setStatus('break')
            } else {
                setStatus('finish')
            }
            
        }
    }, [repeat])

    useEffect(() => {
        if (imgIdx === imgList.length) {
            setImgIdx(1)
            setCounter(actionCounter)
            setRepeat('next')
            setIntervImg(clearInterval(intervImg))
        } 
    }, [imgIdx])

    const runWorkout = () => {
        if (currentWorkout.myCount < 5) {
            setRepeat('repeat')
        } else {
            setCounter(counter++)
            setIntervCounter(setInterval(() => setCounter(counter++), 1000))
        }
    }

    const startHandler = () => {
        setStatus('start')
    }

    const breakCounter = () => {
        setCounter(counter++)
        setIntervCounter(setInterval(() => setCounter(counter++), 1000))
    }

    const pauseHandler = () => {
        if (status === 'break') {
            setStatus('pauseBreak')
        } else {
            setStatus('pause')
        }
    }

    const resumeHandler = () => {
        if (status === 'pause') {
            setStatus('resume')
        } else if (status === 'pauseBreak') {
            setStatus('break')
        }   
    }

  return (
    <Wrap>
      <CardWrap>title</CardWrap>
      <RunWrap>
        {/* <div>{currentWorkout.id}</div> */}
        <Box>
          <ImgStyle>Image : {currentImg}</ImgStyle>
          <CountAndBtn>
            <CountWrap>{`${counter}/${
              status === 'break' || status === 'pauseBreak'
                ? breakCount
                : totalCount
            }`}</CountWrap>
            <ButtonWrap>
              <Row1>
                <Btn type="button" value="START" onClick={startHandler} />
                <Btn type="button" value="PAUSE" onClick={pauseHandler} />
              </Row1>
              <Row2>
                <Btn type="button" value="RESUME" onClick={resumeHandler} />
                <Btn type="button" value="RESET" />
              </Row2>
            </ButtonWrap>
          </CountAndBtn>
        </Box>
      </RunWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  background-color: #13141c;
  height: 100%;
  text-align: center;
  padding: 50px 140px 50px 50px;
`;
const Box = styled.div`
  padding: 20px;
`;
const CardWrap = styled.div`
  flex: 1;
`;

const RunWrap = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  margin-left: 164px;
`;
const ImgStyle = styled.div`
  border-radius: 5px;
  background-color: #000;
  height: 420px;
`;
const CountAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
`;

const CountWrap = styled.div`
  margin-top: 25px;
  padding: 30px;
  font-size: 50px;
  border-radius: 50%;
  background-color: #f7d89f;
`;
const ButtonWrap = styled.div`
  margin-top: 25px;
`;
const Row1 = styled.div``;
const Row2 = styled.div``;
const Btn = styled.input`
  padding: 15px 5px;
  margin: 5px;
  width: 150px;
  background-color: #f7d89f;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export default RunRoutine;

