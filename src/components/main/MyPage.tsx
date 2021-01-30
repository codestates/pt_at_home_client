import React, { useState } from 'react';
import styled from 'styled-components';
import { MyPageProps } from '../../containers/MyPageContainer';

const MyPage = ({
  isLogin,
  userInfo,
  updateUserInfo,
  resignHandler,
}: MyPageProps): JSX.Element => {
  const [userName, setUserName] = useState(userInfo.userName);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [confirmPW, setConfirmPW] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'email') setEmail(e.target.value);
    else if (e.target.name === 'userName') setUserName(e.target.value);
    else if (e.target.name === 'password') setPassword(e.target.value);
    else if (e.target.name === 'confirmPW') setConfirmPW(e.target.value);
  };

  return (
    <Wrap>
      {!isLogin ? (
        <MainWrap>
          <Main>
            <Title>회원 정보</Title>
            <ContentsWrap>
              <Side />
              <Contents>
                <NameRow>
                  {`닉네임 : `}
                  <UserName
                    type="text"
                    value={userName}
                    name="userName"
                    onChange={handleChange}
                  />
                </NameRow>
                <EmailRow>
                  {`이메일 : `}
                  <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleChange}
                  />
                </EmailRow>
                <PasswordRow>
                  {`비밀번호 : `}
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </PasswordRow>

                <input
                  type="button"
                  value="회원 탈퇴"
                  onClick={() => resignHandler(userInfo.email)}
                />
                <input
                  type="button"
                  value="Update"
                  onClick={() => updateUserInfo({ userName, password })}
                />
              </Contents>
            </ContentsWrap>
          </Main>
        </MainWrap>
      ) : (
        <>GUEST</>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainWrap = styled.div`
  height: 90%;
  width: 1000px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  border-radius: 5px 5px 0 0;
  background-color: #fdffbd;
  text-align: right;
  padding: 15px 75px;
  color: #53a2bd;
`;
const ContentsWrap = styled.div`
  display: flex;
  height: 100%;
`;
const Side = styled.div`
  width: 200px;
  height: 100%;
  background-color: #8dd9ff;
  border-radius: 0 0 0 5px;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 0 65px;
`;
const NameRow = styled.div``;
const UserName = styled.input`
  width: 100px;
`;
const EmailRow = styled.div``;
const PasswordRow = styled.div``;
export default MyPage;
