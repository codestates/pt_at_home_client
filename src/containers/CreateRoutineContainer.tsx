import React, { useState } from 'react';
import { CreateRoutine } from '../components/main'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules/reducers'
import { actionSetCurrentRoutine } from '../modules/actions'

export interface CreateRoutineProps {
    
}

const CreateRoutineContainer = ():JSX.Element => {
    const [addedWorkout, setAddedWorkout] = useState([])
    const Dispatch = useDispatch()
    const myWorkouts = useSelector((state:RootState) => state.myWorkouts)
    const myRoutines = useSelector((state:RootState) => state.myRoutines)

    const editMyRoutine = () => {

    }

    const saveMyRoutine = () => {

    }

    const setCurretRoutine = () => {

    }


    return (
        <div>
            <CreateRoutine />
        </div>
    );
};

export default CreateRoutineContainer;