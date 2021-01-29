import React, { useState } from 'react';
import styled from 'styled-components'

interface ModalRoutineTitleProps {
    offModalRoutinetitle():void;
    saveRoutineTitle(title:string):void;
}

const ModalRoutineTitle = ({offModalRoutinetitle, saveRoutineTitle}:ModalRoutineTitleProps):JSX.Element => {
    const [routineTitle, setRoutineTitle] = useState('')
    const [alertMsg, setAlertMsg] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        if (e.target.name === 'routineTitle') setRoutineTitle(e.target.value)
    }
   
    return (
        <Frame>
            <Wrap>
                <CloseBtn><input type="button" value="X" onClick={offModalRoutinetitle}/></CloseBtn>
                <Msg>Routine의 이름을 입력해주세요</Msg>
                    <EachInput>
                        <InputTag type="text" name='routineTitle'  placeholder='Routine Title 입력' value={routineTitle} onChange={handleChange} />
                    </EachInput>
                <AlertMsg>{alertMsg}</AlertMsg>
                <ControlBtn>
                    <SaveBtn type="button" value='SAVE' onClick={() => saveRoutineTitle(routineTitle)}/>
                </ControlBtn>
            </Wrap>
        </Frame>
    );
};

const Frame = styled.div`
  height: 225px;
  width: 375px;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  display: inline-block;
  background-color: white;
  border-radius: 4px;
  transition: 400ms ease;
  position: absolute;
  margin-top:100px;
  left:150px;
  padding: 5px;
  z-index:1;
`;

const Wrap = styled.div`
    display:flex;
    flex-flow: column nowrap;
    justify-content:space-between;
    height:100%;
`

const CloseBtn = styled.div`
    padding-top:2%;
    padding-right:2%;
    text-align:right;
`

const Msg =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:2%;
    height:30px;
    font-size:1.2rem;
`

const SettingBox = styled.div`
    display:flex;
    flex-flow:column nowrap;
    justify-content:space-between;
    
`

const EachInput = styled.div`
    display:flex;
    justify-content:center;
    margin:1%;
    padding:3px;
    
`

const InputTag = styled.input`
    margin:0 15px;
    width:280px;
    font-size:1.5rem;
`

const ControlBtn = styled.div`
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-evenly;
    margin:2% 0% ;
`

const SaveBtn = styled.input`
    border-radius:5px;
    text-decoration: none;
    color: #f0f0f0;
    padding:2% 5%;
    background-color:#636e72;
`;

const AlertMsg = styled.div`
    color:red;
    text-align:center;
`
export default ModalRoutineTitle;