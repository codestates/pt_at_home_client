import React, { useState } from 'react';
import { CreateRoutine } from '../components/main'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules/reducers'
import { Workout } from '../modules/reducers/workoutList'
import { actionSetCurrentRoutine, actionRenewToken } from '../modules/actions'

export interface CreateRoutineProps {
    myWorkouts:Array<Workout>;
}

const CreateRoutineContainer = ():JSX.Element => {
    const Dispatch = useDispatch()
    const currentRoutine = useSelector((state:RootState) => state.currentRoutine)
    const myWorkouts = useSelector((state:RootState) => state.myWorkouts)
    const myRoutines = useSelector((state:RootState) => state.myRoutines)
    const [addedWorkout, setAddedWorkout] = useState([])

  const editMyRoutine = () => {};

  const saveMyRoutine = () => {};

    const setCurretRoutine = () => {

    }

    const addWorkoutToRoutine = () => {

    }

    const removeWorkoutFromRoutine = () => {

    }


    return (
        <div>
            <CreateRoutine myWorkouts={myWorkouts}/>
        </div>
    );
};

export default CreateRoutineContainer;
