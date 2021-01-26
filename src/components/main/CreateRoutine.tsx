import React, { useState } from 'react';
import CreateRoutineCard from '../component/CreateRoutineCard'
import RoutineBox from '../component/RoutineBox'
import { WorkoutOfRoutine } from '../../modules/reducers/currentRoutine'
import { Workout } from '../../modules/reducers/myWorkouts'
import { CreateRoutineProps, ChoseWorkout } from '../../containers/CreateRoutineContainer'

const initialChoseWorkout:ChoseWorkout = {
    id:0,
    title:'',
    instruction:'',
    image:['', ''],
    part:['',''],
    setCount:0,
    count:0,
    breakTime:0,
    mySetCount:0,
    myCount:0,
    myBreakTime:0,
    calrorie: 0,
    tool: ''
    }

const initialAddedWorkouts:ChoseWorkout[] = []

const CreateRoutine = ({
    myWorkouts
}:CreateRoutineProps):JSX.Element => {
    const [choseWorkout, SetChoseWorkout] = useState(initialChoseWorkout)
    const [addedWorkouts, SetAddedWorkouts] = useState(initialAddedWorkouts)

    const dragWorkout = (e:React.ChangeEvent<HTMLInputElement>) => {
        let workout = myWorkouts.filter(el => el.id === 1)[0]
        SetChoseWorkout({...choseWorkout, ...workout}) 
    }

    const dropWorkout = (e:React.ChangeEvent<HTMLInputElement>) => {
       let selectedWorkout = {...choseWorkout}
       selectedWorkout['mySetCount'] = selectedWorkout['setCount']
       selectedWorkout['myCount'] = selectedWorkout['count']
       selectedWorkout['myBreakTime'] = selectedWorkout['breakTime']
       SetAddedWorkouts(addedWorkouts.concat(selectedWorkout))
    }

    return (
        <div>
            <div>
                <CreateRoutineCard />
            </div>
            <div>
                <RoutineBox />
            </div>
        </div>
    );
};

export default CreateRoutine;