import React, { useState } from 'react';
import styled from 'styled-components';
import { SignupProps } from '../containers/SignupContainer';
import img from '../img/img4.png'
import logo from '../img/savemehomt_logo.png'

const Signup = ({ signupHandler, kakaoLoginHandler, googleLoginHandler, githubLoginHandler }: SignupProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPW, setConfirmPW] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'email') setEmail(e.target.value);
    else if (e.target.name === 'userName') setUserName(e.target.value);
    else if (e.target.name === 'password') setPassword(e.target.value);
    else if (e.target.name === 'confirmPW') setConfirmPW(e.target.value);
  };

  const clickSignupHandler = () => {
    if (!email || !password || !userName || !confirmPW) {
      setAlertMsg("모든 항목은 필수입니다.")
    } else if (password !== confirmPW) {
      setAlertMsg("비밀번호가 맞지않습니다.")
    } else if (!/^[0-9a-zA-Z]([-_\]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email)) {
      setAlertMsg("이메일 형식이 아닙니다.")
    } else if (!/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&+=]).*$/.test(password)) {
      setAlertMsg("대문자, 소문자, 특수문자, 숫자형식이 하나이상 들어가야 합니다. 비밀번호가 8 - 15 여야 합니다.")
    } else {
      signupHandler({ email, userName, password })  
    }
}

  return (
    <>
      <SignUpMainContainer>
        <SignUpLogo src={logo}></SignUpLogo>
        <SignUpInputSection>
        <SignUpMainConteiner>
                    <SignUpText>Sign up</SignUpText>
                    <SignUpEmailText>email</SignUpEmailText>
                    <SignUpInput
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleChange}
                    />
                    <SignUpEmailText>user name</SignUpEmailText>
                    <SignUpInput
                      type="text"
                      name="userName"
                      placeholder="User Name"
                      value={userName}
                      onChange={handleChange}
                    />
                    <SignUpEmailText>password</SignUpEmailText>
                    <SignUpInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={handleChange}
                    />
                    <SignUpEmailText>confirm password</SignUpEmailText>
                    <SignUpInput
                      type="password"
                      name="confirmPW"
                      placeholder="Confirm Password"
                      value={confirmPW}
                      onChange={handleChange}
                    />
                    <SignUpButton
                      type="button"
                      onClick={clickSignupHandler}
                      value="Signup"
                    />
            </SignUpMainConteiner>
        </SignUpInputSection>
        <SignUpImgSection>
          <Top></Top>
          <SignUpImg src={img}></SignUpImg>
          <Bottom></Bottom>
        </SignUpImgSection>
      </SignUpMainContainer>
    </>
  );
};

const SignUpLogo = styled.img`
position: relative;
right: -1785px;
top : -14px;
max-width: 100px;
max-height:100px;
`;


const SignUpMainContainer= styled.div`
    height : 100%;
    display : flex;
`;

const SignUpInputSection = styled.section`
    width : 100%;
    align-items : center;
    display : flex;
    flex-direction : column;
    justify-content : center;
    margin-left : 93px;
    @media (max-width: 598px) {
      margin-left : 0px;
  }
`;

const SignUpMainConteiner = styled.div`
    align-items : center;
    display : flex;
    flex-direction : column;
    justify-content : center;
`;

const SignUpText = styled.h2`
    font-size : 50px;
    text-align : center;
    margin-bottom : 20px;
`;

const SignUpEmailText = styled.h3`
    font-size : 20px;
    width : 100%;
`;


const SignUpInput = styled.input`
    font-size : 16px;
    padding-left : 15px;
    width : 400px;
    height : 2.5rem;
    margin : 5px;
    border : 1px solid transparent;
    background-color : #f3f3f4;
    margin-bottom : 15px;
    border-radius : 10px;
    :: placeholder {
        font-size : 16px;
    }
    &:focus {
        outline : none;
    }
`;

const SignUpButton = styled.input`
    width : 400px;
    height : 2.5rem;
    margin : 5px;
    border : 1px solid transparent;
    background-color :#f497ad;
    margin-bottom : 15px;
    border-radius : 10px;
    font-size : 20px;
`;


const SignUpImgSection = styled.section`
    display : flex;
    flex-direction : column;
    height : 100%;
    width : 50%;
    @media (max-width: 938px) {
        display : none;
    }
`;

const Top = styled.div`
    height : 30%;

`;

const SignUpImg = styled.img`
    height : 100%;

`;

const Bottom = styled.div`
    height : 30%;
`;


export default Signup;
