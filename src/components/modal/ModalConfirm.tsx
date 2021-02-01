import React from 'react';
import styled from 'styled-components'

interface ModalConfirm {
    message:string;
    buttonValue:string;
    buttonHandler():void;
    modalClose():void;
}

const ModalConfirm = ({message, buttonValue, buttonHandler, modalClose}:ModalConfirm):JSX.Element => {
    return (
        <Frame>
            <Wrap>
                <CloseBtn><input type="button" value="X" onClick={modalClose}/></CloseBtn>
                <LoginMsg>{message}</LoginMsg>
                <ControlBtn>
                    <YesBtn type="button" value={buttonValue} onClick={buttonHandler}/>
                </ControlBtn>
            </Wrap>
        </Frame>
    );
};

const Frame = styled.div`
  height: 200px;
  width: 400px;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  display: inline-block;
  background-color: white;
  border-radius: 4px;
  transition: 400ms ease;
  position: absolute;
  margin-left:30%;
  margin-top:200px;
  left:252px;
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
const LoginMsg =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:50px;
    margin-top:3%;
    font-size:1.1rem;
`

const ControlBtn = styled.div`
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-evenly;
    margin-bottom:10%;
`

const YesBtn = styled.input`
    border-radius:5px;
    text-decoration: none;
    color: #f0f0f0;
    padding:3% 5%;
    background-color:#636e72;

`;

export default ModalConfirm;