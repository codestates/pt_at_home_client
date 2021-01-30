import React, { useMemo, useEffect } from 'react';
import _WorkoutCard_2 from './_WorkoutCard_2'
import { MyWorkoutCardProps } from '../modal/ModalRoutineDetail'
import styled from 'styled-components'
import { WorkoutOfRoutine } from '../../modules/reducers/routineList';

interface RoutineCardProps {
    routineCards:Array<WorkoutOfRoutine>;
    routineOrder:number;
}

const RoutineCardOrder = ({routineCards, routineOrder}:RoutineCardProps) => {
    let displayThree:Array<WorkoutOfRoutine> = []
    if (routineOrder === 0) {
        displayThree = Array.from(routineCards)
    } else {
        displayThree = Array.from(routineCards)
        displayThree.shift()
    }
    // display = useMemo(() =>  display.shift(), [routineOrder])


    // if (routineOrder === 0) {
    //     displayThree = routineCards.slice(-1).concat(routineCards.slice(0,2))
    // }
    // else if (routineOrder === routineCards.length-1) {
    //     displayThree = routineCards.slice(routineOrder-1).concat(routineCards[0])
    // } else {
    //     displayThree = routineCards.slice(routineOrder-1, routineOrder+2)
    // }

    return (
        <>
            {displayThree.map(el => <_WorkoutCard_2 key={el.id} myWorkoutCard={el}/>)}
        </>
    );
};








export default RoutineCardOrder;