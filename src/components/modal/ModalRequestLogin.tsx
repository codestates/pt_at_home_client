import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface ModalRequestLoginProps {
    offLoginModal?:() => void;
}

const ModalRequestLogin = ({offLoginModal}:ModalRequestLoginProps):JSX.Element => {
    return (
        <Frame>
            <Wrap>
                <CloseBtn><XBtn type="button" value="X" onClick={offLoginModal}/></CloseBtn>
                <LoginMsg>나만의 루틴으로 저장하려면 로그인 또는 회원가입을 해주세요.</LoginMsg>
                <ControlBtn>
                    <StyledLink to='/login'>LOG IN</StyledLink>
                    <StyledLink to='/signup'>SIGN UP</StyledLink>
                </ControlBtn>
            </Wrap>
        </Frame>
    );
};

const Frame = styled.div`
  height: 230px;
  width: 470px;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
  display: inline-block;
  background-color: #f2f3f7;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: 400ms ease;
  position: absolute;
  margin-top:200px;
//   left:110px;
  left:12%;
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
const XBtn = styled.input`
color:red;
font-weight:bold;
outline: none;
width: 27px;
height: 27;
background-color: #f2f3f7;
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 20px;
box-shadow: -3px -8px 7px #fff, 5px 5px 20px #9d9ea1;
transition: all 0.2s ease-in-out;
cursor: pointer;
&:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
}
&:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
}
`

const LoginMsg =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:50px;
    margin-top:3%;
    font-size:1rem;
`

const ControlBtn = styled.div`
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-evenly;
    margin-bottom:10%;
    border-radius:20px;

`

const StyledLink = styled(Link)`
    font-weight:700;
    border-radius:20px;
    text-decoration: none;
    color: #f0f0f0;
    padding:3% 5%;
    color: #555555;
    border: 1px solid rgba(255, 255, 255, 0.2);
    outline: none;
    background-color: #f2f3f7;
    box-shadow: -3px -8px 7px #fff, 5px 5px 20px #9d9ea1;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
      }
      &:active {
        box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #e0e5ec;
      }

`;

export default ModalRequestLogin;