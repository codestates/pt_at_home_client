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
            <div>{userInfo.id}</div>
            <NameRow>
              ad
              <UserName
                type="text"
                value={userName}
                name="userName"
                onChange={handleChange}
              />
            </NameRow>
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="button"
              value="Leave Website"
              onClick={() => resignHandler(userInfo.email)}
            />
            <input
              type="button"
              value="Update"
              onClick={() => updateUserInfo({ userName, password })}
            />
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
`;
const MainWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Main = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const NameRow = styled.div``;
const UserName = styled.input`
  width: 100px;
`;

export default MyPage;
