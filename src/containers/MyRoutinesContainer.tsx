import React, {useState} from 'react';
import { MyRoutines } from '../components/main'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules/reducers'
import { Routine } from '../modules/reducers/routineList'
import { ModalRoutineDetail } from '../components/modal'
import { actionRenewToken, actionSetMyRoutines } from '../modules/actions'
import { URI } from '../index'
import axios from 'axios'
axios.defaults.withCredentials = true

interface RemoveRoutineResponse {
    data: Array<Routine>;
    message: string;
  }

export interface MyRoutinesProps {
    myRoutines:Array<Routine>;
    clickRoutineCard(id:number):void;
}

const MyRoutinesContainer = () => {
    const dispatch = useDispatch()
    // const isLogin = useSelector((state:RootState) => isLogin.isLogin)
    const auth = useSelector((state:RootState) => state.userInfo.auth)
    const myRoutines = useSelector((state:RootState) => state.myRoutines)
    const [routineDetail, setRoutineDetail] = useState(myRoutines[0])
    const [routineModal, setRoutineModal] = useState(false)

    const clickRoutineCard = (id:number):void => {
        let currentRoutine:Routine = myRoutines.filter(el => el.routineId === id)[0]
        setRoutineDetail(currentRoutine)
        setRoutineModal(true)
      }
    
      const offRoutineModal = ():void => {
        setRoutineModal(false)
      }

      const saveOrRemoveRoutine = async (id:number) =>  {
          let { token, expDate } = auth
          let isTokenValid = await actionRenewToken(token, expDate, dispatch)
          if (isTokenValid) {
            axios.post<RemoveRoutineResponse>(`${URI}/myroutine/deleteroutine`,{routineId:id}, {headers:{'Content-Type':'application/json'}})
            .then(res => {
                if (res.data.message === 'ok') {
                actionSetMyRoutines(res.data.data)
                }
            })
          } 
      };

    return (
        <div>
            {routineModal?<ModalRoutineDetail routineDetail={routineDetail} offRoutineModal={offRoutineModal} saveOrRemoveRoutine={saveOrRemoveRoutine}/>:''}
            <MyRoutines myRoutines={myRoutines} clickRoutineCard={clickRoutineCard}/>
        </div>
    );
};

export default MyRoutinesContainer;