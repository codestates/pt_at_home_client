import React, { useState } from 'react';
import styled from 'styled-components';
import { MyPageProps } from '../../containers/MyPageContainer';
import chart from '../../img/chart.png';
import graph from '../../img/graph.png';

const MyPage = ({
  isLogin,
  userInfo,
  updateUserInfo,
  resignHandler,
}: MyPageProps): JSX.Element => {
  const [edit, setEdit] = useState(false);
  const [userName, setUserName] = useState(userInfo.userName);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState('');
  const [confirmPW, setConfirmPW] = useState('');

  const EditButton = () => {
    setEdit(!edit);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'email') setEmail(e.target.value);
    else if (e.target.name === 'userName') setUserName(e.target.value);
    else if (e.target.name === 'password') setPassword(e.target.value);
    else if (e.target.name === 'confirmPW') setConfirmPW(e.target.value);
  };

  return (
    <Wrap>
      {isLogin ? (
        <MainWrap>
          <Main>
            <MainTop>
              <Title>회원 정보</Title>
              <EditBtn>
                <Btn onClick={EditButton}>
                  {!edit ? '수정하기' : '수정취소'}
                </Btn>
              </EditBtn>
            </MainTop>
            <ContentsWrap>
              <Contents>
                {!edit ? (
                  <EditRow>
                    <NameRow>{`닉네임 : ${userName}`}</NameRow>
                    <EmailRow>{`이메일 : ${email}`}</EmailRow>
                  </EditRow>
                ) : (
                  <EditRow>
                    <InfoRow>
                      <NameRow>
                        {`닉네임 : `}
                        <Editinput
                          type="text"
                          value={userName}
                          name="userName"
                          onChange={handleChange}
                        />
                      </NameRow>
                      <PasswordRow>
                        {`현재 비밀번호 : `}
                        <Editinput
                          type="password"
                          placeholder="password"
                          name="password"
                        />
                      </PasswordRow>
                      <PasswordRow>
                        {`새 비밀번호 : `}
                        <Editinput
                          type="password"
                          placeholder="password"
                          name="password"
                        />
                      </PasswordRow>
                      <PasswordRow>
                        {`새 비밀번호 확인: `}
                        <Editinput
                          type="password"
                          placeholder="password"
                          name="password"
                          onChange={handleChange}
                        />
                      </PasswordRow>
                    </InfoRow>
                    <SaveBtnWrap>
                      <Btn
                        onClick={() => updateUserInfo({ userName, password })}
                      >
                        저장하기
                      </Btn>
                    </SaveBtnWrap>
                  </EditRow>
                )}
                <DeleteWrap>
                  <Btn onClick={() => resignHandler(userInfo.email)}>
                    회원 탈퇴
                  </Btn>
                </DeleteWrap>
              </Contents>
            </ContentsWrap>
            <img src={graph} />
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
  height: 100%;
  width: 100%;
  margin: 0 130px;
  display: flex;
  justify-content: center;
  border-left: solid 1px #f0f0f0;
  border-right: solid 1px #f0f0f0;
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const MainTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  border-bottom: solid 1px #f0f0f0;
`;
const Title = styled.div`
  padding: 15px 75px;
  font-size: 50px;
  font-weight: 700;
  color: #000000;
`;
const EditBtn = styled.span`
  height: 35%;
  position: relative;
  top: -15px;
`;
const ContentsWrap = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
const Contents = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 50px 0 0 0;
`;
const NameRow = styled.div`
  margin-bottom: 20px;
`;
const InfoRow = styled.div`
  text-align: end;
  padding: 0 24px;
`;
const EmailRow = styled.div``;
const PasswordRow = styled.div`
  margin-bottom: 15px;
`;
const EditRow = styled.div`
  width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 9px 9px 16px rgb(163 177 198 / 60%),
    -9px -9px 16px rgb(255 255 255 / 50%);
  border-radius: 20px;
  padding: 20px;
  margin-left: 65px;
`;
const Btn = styled.button`
  outline: none;
  height: 30px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #ffffff;
  }
`;
const SaveBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const DeleteWrap = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
`;
const Editinput = styled.input``;
export default MyPage;
