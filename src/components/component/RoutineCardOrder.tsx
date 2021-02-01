import React, {useRef } from 'react';
import _WorkoutCard_2 from './_WorkoutCard_2'
import { MyWorkoutCardProps } from '../modal/ModalRoutineDetail'
import styled, {css} from 'styled-components'
import { WorkoutOfRoutine } from '../../modules/reducers/routineList';

interface RoutineCardProps {
    routineCards:Array<WorkoutOfRoutine>;
    routineOrder:number;
}

const RoutineCardOrder = ({routineCards, routineOrder}:RoutineCardProps) => {
    let displayCards:Array<WorkoutOfRoutine> = []
    const cardRef = useRef<HTMLDivElement | null>(null)
    displayCards = routineCards.slice(routineCards.length-1).concat(routineCards, routineCards.slice(0,1))
    // if (routineOrder === 0) {
    //     displayCards = Array.from(routineCards)
    // } else {
    //     displayCards = Array.from(routineCards)
    //     displayCards.shift()
    // }
    // display = useMemo(() =>  display.shift(), [routineOrder])


    // if (routineOrder === 0) {
    //     displayCards = routineCards.slice(-1).concat(routineCards.slice(0,3))
    // }
    // else if (routineOrder === routineCards.length-1) {
    //     displayCards = routineCards.slice(routineOrder-1).concat(routineCards[0], routineCards[1])
    // } else {
    //     displayCards = routineCards.slice(routineOrder-1, routineOrder+3)
    // }
    return (
        <>
            {routineCards.map((el, idx) => <CardBox  ref={cardRef}  key={idx}  order={{routineOrder, length:routineCards.length, idx:idx}}><_WorkoutCard_2  myWorkoutCard={el}/></CardBox>)}

        </>
    );
};

export const CardBox = styled.div`
    transform:${(props:{order:{routineOrder:number, length:number, idx:number}}) => 
        props.order.routineOrder === props.order.idx ? 
        `scale(${1.3}) translateY(-${props.order.routineOrder*100}%)` :
        `translateY(-${props.order.routineOrder*120}%)`
    
    // `scale(${}) translateY(-${props.order.routineOrder*100}%)` 
    };

    background-color:${(props:{order:{routineOrder:number, length:number, idx:number}}) => 
        props.order.routineOrder === props.order.idx? `#fad586`:'#f6f5f5'
    };
   
    filter:${(props:{order:{routineOrder:number, length:number, idx:number}}) => 
    props.order.routineOrder === props.order.idx? 'blur(0px)':'blur(1px)'
    };

    z-index:${(props:{order:{routineOrder:number, length:number, idx:number}}) => 
    props.order.routineOrder === props.order.idx? '1':'0'
    };
   
    border-radius: 10px;
    transition: 500ms ease;
    width:300px;
    height:150px;
    margin-bottom:35px;
`

// order={{routineOrder, length:routineCards.length}}
// transform:${(props:{order:{routineOrder:number, length:number}}) => 
// `translateY(-${props.order.routineOrder*100}%)` };




export default RoutineCardOrder;

// transform:${(props: { order:{routineOrder:number, length:number}}) => 
//         props.order.routineOrder < props.order.length ? 
//             `translateY(-${props.order.routineOrder*100}%)`:
//                 (props.order.routineOrder === props.order.length-2?`translateY(-${props.order.routineOrder-2*100}%)`:
//                     (props.order.routineOrder === props.order.length-1?`translateY(-${props.order.routineOrder-1*100}%)`:
//                         ''
//                     ))
        
//         };