import React, { useState } from 'react';
import styled from 'styled-components';
import { SignupProps } from '../containers/SignupContainer';
import { Link } from 'react-router-dom';
import img from '../img/img4.svg';
import logo from '../img/savemehomt_logo.png';

const Signup = ({
  signupHandler,
  kakaoLoginHandler,
  googleLoginHandler,
  githubLoginHandler,
}: SignupProps): JSX.Element => {
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
      setAlertMsg('모든 항목은 필수입니다.');
    } else if (password !== confirmPW) {
      setAlertMsg('비밀번호가 맞지않습니다.');
    } else if (
      !/^[0-9a-zA-Z]([-_\]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
        email,
      )
    ) {
      setAlertMsg('이메일 형식이 아닙니다.');
    } else if (
      !/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&+=]).*$/.test(
        password,
      )
    ) {
      setAlertMsg(
        `대/소문자, 특수문자, 숫자가 하나 이상씩 들어가야 합니다. 비밀번호가 8-15여야 합니다.`,
      );
    } else {
      signupHandler({ email, userName, password });
    }
  };
  return (
    <>
      <SignUpMainContainer>
        <SignUpLogoBox>
          <Link to="/">
            <SignUpLogo src={logo}></SignUpLogo>
          </Link>
        </SignUpLogoBox>
        <SingnUpSectionBox>
          <SignUpInputSection>
            <SignUpMainConteiner>
              <SignUpText>Sign up</SignUpText>
              <SignUpInput
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
              <SignUpInput
                type="text"
                name="userName"
                placeholder="User Name"
                value={userName}
                onChange={handleChange}
              />
              <SignUpInput
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
              <SignUpInput
                type="password"
                name="confirmPW"
                placeholder="Confirm Password"
                value={confirmPW}
                onChange={handleChange}
              />
              <AlertMsg>{alertMsg}</AlertMsg>
              <SignUpButton
                type="button"
                onClick={clickSignupHandler}
                value="SIGN UP"
              />
            </SignUpMainConteiner>
          </SignUpInputSection>
          <SignUpImgSection>
            <SignUpImg src={img}></SignUpImg>
          </SignUpImgSection>
        </SingnUpSectionBox>
      </SignUpMainContainer>
    </>
  );
};

const SingnUpSectionBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 88%;
`;
const SignUpLogoBox = styled.div`
    width : 100%;
    display : flex;
`;

const SignUpLogo = styled.img`
    max-height:100px;
    margin: 25px 0 0 25px;
`;
const SignUpMainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const SignUpInputSection = styled.section`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 93px;
  @media (max-width: 598px) {
    margin-left: 0px;
  }
`;
const SignUpMainConteiner = styled.div`
  align-items: center;
  margin-bottom: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SignUpText = styled.h2`
  font-size: 50px;
  text-align: center;
  margin-bottom: 20px;
`;
const SignUpEmailText = styled.h3`
  font-size: 20px;
  width: 100%;
`;
const SignUpInput = styled.input`
  font-size: 16px;
  padding-left: 15px;
  width: 400px;
  height: 2.5rem;
  margin: 5px;
  border: 1px solid transparent;
  background-color: white;
  margin-bottom: 15px;
  border-radius: 10px;
  ::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
  }
`;
const AlertMsg = styled.div`
  text-align: center;
  color: #de4463;
  padding: 10px 0;
`;
const SignUpButton = styled.input`
  width: 400px;
  height: 2.5rem;
  margin: 5px;
  border: 1px solid transparent;
  background-color: #f497ad;
  margin-bottom: 15px;
  border-radius: 10px;
  font-size: 20px;
`;
const SignUpImgSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 180px;
  height: 100%;
  width: 50%;
  @media (max-width: 1264px) {
    display: none;
  }
`;
const SignUpImg = styled.img`
  margin-bottom: 150px;
  margin-right: 300px;
`;
export default Signup;
