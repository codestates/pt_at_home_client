import React from 'react';
import CreateRoutineCard from '../component/CreateRoutineCard'
import RoutineBox from '../component/RoutineBox'

const CreateRoutine = ():JSX.Element => {
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