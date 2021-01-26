import React, { useState, useEffect, useMemo } from 'react';
import { CurrentRoutineProps } from '../../containers/RunRoutineContainer'
import CreateRoutineCard from '../component/CreateRoutineCard'

type SetInterval=ReturnType<typeof setInterval>


const RunRoutine = ({
    currentRoutine,

}:CurrentRoutineProps):JSX.Element => {
    const initialInterve:SetInterval | any = null
    let {routineId, title, workout} = currentRoutine
    let [counter, setCounter] = useState(0)
    // let [currentWorkout, setCurrentWorkout] = useState(workout[0])
    // let [totalCount, setTotalCount] = useState(workout[0].myCount)
    let [routineOrder, setRoutineOrder] = useState(0)
    let [intervCounter, setIntervCounter] = useState(initialInterve)
    let [intervImg, setIntervImg] = useState(initialInterve)
    let [status, setStatus] = useState('ready')
    let [imgIdx, setImgIdx] = useState(0)
    let [repeat, setRepeat] = useState(false)
    let imgList = workout[routineOrder].image
    // let imgListLength = imgList.length
    // let [currentImg, setCurrentImg] = useState(imgList[imgIdx])
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
        } if (status === 'break') {
            breakCounter()
        } if (status === 'finish') {
            setCounter(0)
            setIntervCounter(clearInterval(intervCounter))
            setIntervImg(clearInterval(intervImg))
        } if (status === 'resume') {
            setIntervCounter(setInterval(() => setCounter(counter++), 1000))
        } if (status === 'pause') {
            setIntervCounter(clearInterval(intervCounter))
            setIntervImg(clearInterval(intervImg))
        } if (status === 'pauseBreak') {
            setIntervCounter(clearInterval(intervCounter))
        }
    }, [status])

    useEffect(() => {
        if (repeat) {
            setIntervImg(setInterval(() => setImgIdx(imgIdx++), 1500))
        } 
    },[imgIdx, repeat])

    let currentImg = imgIdx === imgList.length? imgList[0]:imgList[imgIdx]
    let actionCounter = useMemo(() => counter+1, [counter])
    // let memoIndex = useMemo(() => imgIdx+1, [imgIdx])
    useEffect(() => {
        if (intervImg === undefined) {
            setCounter(actionCounter)
        }
    }, [intervImg])
    
    useEffect(() => {
        if (imgIdx  === imgList.length ){
            setImgIdx(0)
            // setCounter(counter++)
            setIntervImg(clearInterval(intervImg))
            return () => {
                console.log('초기화')
                setIntervImg(clearInterval(intervImg))
            }
        }
        console.log('counter:',counter, 'currentImg:',currentImg, 'imgIdx:', imgIdx, 'imglength:',imgList.length, 'totalCount:', totalCount)
        return () => {console.log('unmount')}
    }, [imgIdx])

    const actionHandler = () => {
        setIntervImg(setInterval(() => {
            setImgIdx(imgIdx++)
        }, 1500))
    }

    const stopActionHandler = () => {
        setIntervImg(clearInterval(intervImg))
    }

    const runWorkout = () => {
        if (currentWorkout.myCount < 30) {
            setImgIdx(imgIdx++)
            setIntervImg(setInterval(() => {
                setImgIdx(imgIdx++)
            }, 1500))
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
            <div>
                title
            </div>
            <div>
                <div>{currentWorkout.id}</div>
                <div>Image : {currentImg}</div>
                <div>{`${counter}/${status === 'break' || status === 'pauseBreak'?breakCount:totalCount}`}</div>
                <input type="button" value="START" onClick={startHandler}/>
                <input type="button" value="PAUSE" onClick={pauseHandler}/>
                <input type="button" value="RESUME" onClick={resumeHandler}/>
                {/* <input type="button" value="PAUSE-BREAK" onClick={pauseBreakHandler}/>
                <input type="button" value="RESUME-BREAK" onClick={resumeBreakHandler}/> */}
                <input type="button" value="RESET"/>
                <input type="button" value="IMG START" onClick={actionHandler}/>
                <input type="button" value="IMG STOP" onClick={stopActionHandler}/>
            </div>
        </div>
    );
};

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