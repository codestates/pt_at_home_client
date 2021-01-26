import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RunRoutine } from '../components/main'
import { RootState } from '../modules/reducers'
import { CurrentRoutine } from '../modules/reducers/currentRoutine'

export interface CurrentRoutineProps {
    currentRoutine:CurrentRoutine;

}

// type SetInterval=ReturnType<typeof setInterval>
// const initialInterve:SetInterval | any = null

const RunRoutineContainer = ():JSX.Element => {
    const currentRoutine = useSelector((state:RootState) => state.currentRoutine)

    return (
        <div>
            <RunRoutine 
            currentRoutine={currentRoutine} 
            />
        </div>
    );
};

export default RunRoutineContainer;