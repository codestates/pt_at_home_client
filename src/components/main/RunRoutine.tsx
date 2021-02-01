import React, { useState, useEffect, useMemo, useRef } from 'react';
import { CurrentRoutineProps } from '../../containers/RunRoutineContainer';
import RoutineCardOrder from '../component/RoutineCardOrder'
import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';
import finishImg from '../../img/Finish_2.png'
import readyImg from '../../img/Ready.png'
const bgm1 = 'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/bgm2.mp3'
const bgm2 = 'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/bgm1.wav'
const countedSound = new Audio('https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/counted.mp3')
const breakTimeImage = 'https://ptathomebucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%B2%E1%84%89%E1%85%B5%E1%86%A8.jpeg'


type SetInterval = ReturnType<typeof setInterval>;

const RunRoutine = ({ currentRoutine }: CurrentRoutineProps): JSX.Element => {
  const initialInterve: SetInterval | any = undefined;
  const { routineId, title, workout } = currentRoutine;
  let [counter, setCounter] = useState(0);
  let [routineOrder, setRoutineOrder] = useState(0);
  const [intervCounter, setIntervCounter] = useState(initialInterve);
  const [intervImg, setIntervImg] = useState(initialInterve);
  const [status, setStatus] = useState('ready');
  let [imgIdx, setImgIdx] = useState(1);
  const [repeat, setRepeat] = useState('ready');
  const [audioPlay, setAudioPlay] = useState(false)
  const [bgm, setBgm] = useState(bgm1)
  let imgList = workout[routineOrder]?.image;
  let currentWorkout = workout[routineOrder];
  let totalCount = workout[routineOrder]?.myCount;
  let breakCount = workout[routineOrder]?.myBreakTime;
  const intervalTime = 1400 / (workout[routineOrder]?.image.length - 1)
  let num = useMemo(() => routineOrder + 1, [routineOrder]);
  
  
  useEffect(() => {
    // countedSound.play()
    if (
      counter === totalCount + 1 &&
      (status === 'start' || status === 'resume')
    ) {
      setCounter(0);
      return () => {
        setIntervCounter(clearInterval(intervCounter));
        setIntervImg(clearInterval(intervImg));
        if (num < workout.length) {
          setTimeout(() => setStatus('break'), 2000);
        } else {
          setStatus('finish');
        }
      };
    } else if (counter === breakCount + 1 && status === 'break') {
      setCounter(0);
      return () => {
        setIntervCounter(clearInterval(intervCounter));
        if (num < workout.length) {
          setRoutineOrder(num);
          setTimeout(() => setStatus('start'), 2000);
        }
      };
    }
  }, [counter]);

  useEffect(() => {
    if (status === 'start') {
      runWorkout();
    } else if (status === 'break') {
      breakCounter();
    } else if (status === 'finish') {
      setCounter(0);
      setIntervCounter(clearInterval(intervCounter));
      setIntervImg(clearInterval(intervImg));
    } else if (status === 'resume' && repeat === 'repeat') {
      setIntervImg(setInterval(() => setImgIdx(imgIdx++), 1500));
    } else if (status === 'resume') {
      setIntervCounter(setInterval(() => {
        setCounter(counter++)
        countedSound.play()
      }, 1000));
    } else if (status === 'pause') {
      setIntervCounter(clearInterval(intervCounter));
      setIntervImg(clearInterval(intervImg));
    } else if (status === 'pauseBreak') {
      setIntervCounter(clearInterval(intervCounter));
    }
  }, [status]);

  useEffect(() => {
    if (status !== 'pause' && status !== 'pauseBreak' && status !== 'finish' && status !== 'ready') {
      setAudioPlay(true)
    }
  }, [status, audioPlay])

  // start 를 누르면 status 를 start로 바꾼다
  // staus 가 start 면 runworkout을 실행한다
  // runworkout 이 실행 될 때 조건에 의해서 count 방식이 결정된다
  // count 방식이 초이면 1초 마다 counter 가 1씩 증가한다.
  // count 방식이 동작이면 1.5초 마다 이미지 배열에 인덱스가 순서대로 증가한다.
  // 이미지 배열을 다 돌면 counter 가 1씩 증가한다.
  // counter 가 totalCount 와 같을때 routineOrder 가 workout.length 보다 작으면 routineOrder가 증가한다.
  // routineOrder 가 증가하면 현재 운동이 재설정 된다.
  // breakTime이 다 돌면 다시 runworkout 이 실행된다.

  let currentImg = imgList?(imgIdx === imgList?.length ? imgList[1] : imgList[imgIdx]):'';
  let actionCounter = useMemo(() => counter + 1, [counter]);
  useEffect(() => {
    if (repeat === 'repeat') {
      // console.log('repeat');
      setIntervImg(setInterval(() => setImgIdx(imgIdx++), intervalTime));
    }
    if (repeat === 'next') {
      if (counter === totalCount) {
        // console.log('next', counter);
        // setCounter(0)
        setTimeout(() => setRepeat('stop'), 1500);
      } else {
        setCounter(counter++);
        setRepeat('repeat');
      }
    }
    if (repeat === 'stop') {
      // console.log('stop');
      setCounter(0);
      setRepeat('ready');
      if (num < workout.length) {
        setStatus('break');
      } else {
        setStatus('finish');
      }
    }
  }, [repeat]);

  useEffect(() => {
    if (imgIdx === imgList?.length) {
      setImgIdx(1);
      setCounter(actionCounter);
      setRepeat('next');
      setIntervImg(clearInterval(intervImg));
    }
  }, [imgIdx]);

  const runWorkout = () => {
    if (currentWorkout.image.length > 2) {
      setRepeat('repeat');
    } else {
      setCounter(counter++);
      setIntervCounter(setInterval(() => {
        setCounter(counter++)
        countedSound.play()
      }, 1000));
    }
  };

  const startHandler = () => {
    setStatus('start');
  };

  const breakCounter = () => {
    setCounter(counter++);
    setIntervCounter(setInterval(() => setCounter(counter++), 1000));
  };

  const pauseHandler = () => {
    if (status === 'break') {
      setStatus('pauseBreak');
    } else {
      setStatus('pause');
    }
  };

  const resumeHandler = () => {
    countedSound.play()
    if (status === 'pause') {
      setStatus('resume');
    } else if (status === 'pauseBreak') {
      setStatus('break');
    }
  };

  const resetHandler = () => {
    setImgIdx(1)
    setRoutineOrder(0)
    setCounter(0)
    setStatus('ready')
    setRepeat('ready')
  }

  return (
    <Wrap>
      <div>
          <RunWrap>
        {/* <div>{currentWorkout.id}</div> */}
          <ImgBox>
            <ImgStyle src={status === 'break' || status === 'pauseBreak' ?breakTimeImage:(status === 'ready'? readyImg:(status === 'finish'?finishImg:currentImg))} />
          </ImgBox>
          <CountAndBtn>
            <ControlTop>
              <Title>{currentWorkout?.title.toUpperCase()}</Title>
              <Status>{status === 'break'?'BREAK TIME':(status === 'finish'?'FINISHED':(status==='ready'? 'READY':(status === 'pause' || status === 'pauseBreak' ? 'PAUSED':'')))}</Status>
              <CountWrap>{`${counter} | ${
                status === 'break' || status === 'pauseBreak'
                  ? breakCount
                  : totalCount
              }`}</CountWrap>
            </ControlTop>
            <ButtonWrap>
              {/* <Row1> */}
                {status === 'ready'?<Btn type="button" value="START" onClick={startHandler} />:''}
                {status === 'start' || status === 'resume' || status === 'break'?<Btn type="button" value="PAUSE" onClick={pauseHandler} />:''}
              {/* </Row1> */}
              {/* <Row2> */}
                {status === 'pause' || status==='finish' || status==='pauseBreak' ?<Btn type="button" value="RESET" onClick={resetHandler}/>:''}
                {status === 'pause' || status === 'pauseBreak'?<Btn type="button" value="RESUME" onClick={resumeHandler} />:''}
              {/* </Row2> */}
            </ButtonWrap>
              
          </CountAndBtn>
      </RunWrap>
      <RoutineAudio>
          <ReactAudioPlayer src={bgm2} autoPlay={audioPlay}  controls volume={0.3}/>
      </RoutineAudio>
      </div>
      
      <CardWrap > 
        <RoutineCardOrder routineCards={currentRoutine.workout} routineOrder={routineOrder}/>
      </CardWrap>
    </Wrap>
  );
};
// order={routineOrder}
const Wrap = styled.div`
  display: flex;
  height: 100%;
  justify-content:space-between;
  padding-top:1%;  
`;

const RunWrap = styled.div`
  // flex: 1;
  display:flex;
  justify-content:space-around;
  width:1050px;
  height:85%;
  margin-left:2%;
  background-color: #222831;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  padding: 20px 5px;
`;
const ImgBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius: 5px;
  background-color:white;
  padding:15px;
  width:700px;
`
const ImgStyle = styled.img`
  border-radius: 5px;
  width:90%;
`;

const CountAndBtn = styled.div`
  display: flex;
  width:275px;
  flex-flow:column nowrap;
  justify-content: space-between;
  align-items:center;
  padding:10px 30px;;
`;

const ControlTop = styled.div`
  display:flex;
  flex-flow:column nowrap;
  height:58%;
  justify-content:space-between;
  padding: 15px 0;
  align-items:center;
  margin-top:5%;
  width:275px;
  color:#f5f4f4

`
const Title = styled.div`
  font-weight:bold;
  font-size:1.8rem;

`

const Status = styled.div`
  display:flex;
  align-items:center;
  font-weight:bold;
  font-size:1.7rem;
  height:50px;
`

const CountWrap = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:275px;
  height:170px;
  font-size: 4rem;
  text-shadow:3px 3px grey;

`;

const ButtonWrap = styled.div`
  margin-top:50%;
  margin-bottom: 7%;
  display:flex;
  flex-flow:column nowrap;
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
  font-size:1.2rem;
`;

const RoutineAudio = styled.div`
  margin-top:2%;
  margin-left:2%;
`

const CardWrap = styled.div`
  display:flex;
  flex-flow:column nowrap;
  align-items:center;
  margin-right:75px;
  overflow:hidden;
  padding:10px 10px 10px 10px;
  height:85%;
  width:500px;
  border-radius:8px;
  padding-top:220px;
`;

// ${(props:{order:number})=> 
//   `${CardBox}:nth-child(${props.order}) {
//     transform: translateY(-${props.order*100}%)
//     box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
//     transition: 400ms ease;
//     ${CardBox}:nth-child(${props.order+1}) {
//       z-index:1;
//       transform:scale(1.5) translateY(-${props.order*100}%)
//       box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
//       transition: 400ms ease;
//       ${CardBox}:nth-child(${props.order+2}) {
//         transform:translateY(-${props.order*100}%)
//         box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
//         transition: 400ms ease;
//   }`};


export default RunRoutine;


// ${(props:{order:number})=> `${CardBox}:nth-child(${props.order+1}) {
//   z-index:1;
//   transform:scale(1.5)
//   box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
//   transition: 400ms ease;
// }`};

// ${CardBox}:nth-child(1) {
//   filter:blur(1px);
//   transition: 400ms ease;
// }
// ${CardBox}:nth-child(2) {
//   z-index:1;
//   transform:scale(1.2);
//   box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
//   transition: 400ms ease;
// }
// ${CardBox}:nth-child(3) {
//   filter:blur(1px);
//   transition: 400ms ease;
// }



// const Wrap = styled.div`
//   display: flex;
//   height: 100%;
//   text-align: center;
//   padding: 30px 100px 50px 100px;
//   justify-content:space-between;
// `;
// const Box = styled.div`
//   // padding: 10px;
// `;

// const RunWrap = styled.div`
//   // flex: 1;
//   display:flex;
//   flex-flow:column nowrap
//   width:50%;
//   background-color: #f0f0f0;
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//   border-radius: 5px;
//   padding: 10px;
//   // margin-left: 164px;
// `;
// const ImgStyle = styled.img`
//   border-radius: 5px;
//   // height: 420px;
//   width:90%;
// `;
// const CountAndBtn = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width:90%;
//   padding: 0 50px;
// `;

// const CountWrap = styled.div`
//   margin-top: 25px;
//   padding: 30px;
//   font-size: 50px;
//   border-radius: 50%;
//   background-color: #f7d89f;
// `;

// const ButtonWrap = styled.div`
//   margin-top: 25px;
// `;

// const Row1 = styled.div``;
// const Row2 = styled.div``;
// const Btn = styled.input`
//   padding: 15px 5px;
//   margin: 5px;
//   width: 150px;
//   background-color: #f7d89f;
//   border-radius: 5px;
//   outline: none;
//   border: none;
//   cursor: pointer;
// `;

// const CardWrap = styled.div`
//   // flex: 1;
// `;


