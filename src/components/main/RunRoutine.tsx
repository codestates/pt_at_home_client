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
        <div>
            <WhiteText>
                title
            </WhiteText>
            <WhiteText>
                <div>{currentWorkout.id}</div>
                <div>Image : {currentImg}</div>
                <div>{`${counter}/${status === 'break' || status === 'pauseBreak'?breakCount:totalCount}`}</div>
                <input type="button" value="START" onClick={startHandler}/>
                <input type="button" value="PAUSE" onClick={pauseHandler}/>
                <input type="button" value="RESUME" onClick={resumeHandler}/>
                <input type="button" value="RESET"/>
            </WhiteText>
        </div>
    );
};

const WhiteText = styled.div`
    color:black;
`

export default RunRoutine;

//  // useEffect(() => {
//     //     if (status === 'start') {

//     //     }
//     // })

//     useEffect(() => {
//         if (status === 'next') {
//             runWorkout()
//        } else if (status === 'finished') {
//            return () => {
               
//            }
//        }
//     },[status])

//     const nextWorkout = () => {
//         clearInterval(interval)
//         setCounter(0)
//         setCurrentWorkout(workout[routineOrder])
//         setTotalCount(workout[routineOrder].myCount)
//         setStatus('next')
//     }

//     const finishWorkout = () => {
//         clearInterval(interval)
//         setCounter(0)
//         setStatus('finished')
//     }

//     const counterHandler = () => {
//         if (counter === totalCount+1) {
//             if (routineOrder+1 === workout.length) { 
//                 finishWorkout()
//             } else {
//                 setRoutineOrder(routineOrder++)
//                 nextWorkout()
//             }
//         } else {
//             setCounter(counter++)
//         }
//     }

//     const runWorkout = () => {
//         counterHandler()
//         interval = setInterval(counterHandler, 1000)
//     }
    
//     const startHandler = () => {
//         runWorkout()
//     }

//     const pauseHandler = () => {
//         setStatus('pause')
//     }