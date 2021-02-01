import React, { useState } from 'react';
import styled from 'styled-components';
import { MyPageProps } from '../../containers/MyPageContainer';
import chart from '../../img/chart2.png';
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
            </MainTop>
              <Contents>
                <EditWap>
                {!edit ? (
                  <EditRow>
                    <UserIngoBox>
                      <NameRow>{`이메일 : ${email}`}</NameRow>
                      <EmailRow>{`닉네임 : ${userName}`}</EmailRow>
                    </UserIngoBox>
                    <BtnBox>
                      <Btn onClick={EditButton}>
                      {!edit ? '수정하기' : '수정취소'}
                      </Btn>
                    </BtnBox>
                  </EditRow>
                ) : (
                  <EditRow>
                    <InfoRow>
                      <NameRow>
                        {`변경할 닉네임 : `}
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
                      <BtnBoxEdit>
                        <Btn onClick={EditButton}>
                            {!edit ? '수정하기' : '수정취소'}
                        </Btn>
                        <Btn
                          onClick={() => updateUserInfo({ userName, password })}
                        >
                          저장하기
                        </Btn>
                      </BtnBoxEdit>
                    </SaveBtnWrap>
                  </EditRow>
                )}
                </EditWap>
              </Contents>
              <LineInfo></LineInfo>
            <GraphWap>
              <ImgText>하루 총 칼리로와 하루 총 운동시간 지표입니다. 일주일 단위로 표시됩니다.</ImgText>
              <Img src={graph}></Img>
            </GraphWap>
            <LineGraph></LineGraph>
            <GraphWap>
              <Img src={chart}></Img>
              <ImgText>부위별 운동량 지표입니다.</ImgText>
            </GraphWap>
            <ResignBtnBox>
              <Btn onClick={() => resignHandler(userInfo.email)}>
                  회원 탈퇴
              </Btn>
            </ResignBtnBox>
          </Main>
        </MainWrap>
      ) : (
        <>GUEST</>
      )}
    </Wrap>
  );
};

const LineInfo = styled.div`
width : 70%;
border-top : 1px solid #e0e0e0;
margin : 20px;
text-align : center;
overflow : visible;
  &:after {
    content : 'Chart';
    position : relative;
    top : -7px;
    background-color : White;
    padding : 10px;
  }
`;

const LineGraph = styled.div`
width : 80%;
border-top : 1px solid #e0e0e0;
margin : 20px;
text-align : center;
overflow : visible;
  &:after {
    content : 'Graph';
    position : relative;
    top : -7px;
    background-color : White;
    padding : 10px;
  }
`;


const ResignBtnBox = styled.div`
  margin-bottom : 50px;
  width: 100%;
  display : flex;
  justify-content : flex-end;
  padding : 0 155px 0 0;

`;

const BtnBoxEdit = styled.div`
  margin-left : 130px;
  display : flex;
  flex-direction : column;
  width : 130px;
`;

const UserIngoBox = styled.div`
  font-size : 18px;
  margin-top : 12px;
  width: 50%;
  display : flex;
  flex-direction : column;
`;

const BtnBox = styled.div`
  margin-left : 148px;
  width: 20%;
  display : flex;
  flex-direction : column;
  justify-content: center;

`;


const ImgText = styled.p`
  font-size : 20px;
  width : 40%;
  height : 100%;
  text-align : center;
`;

const Img = styled.img`
  width : 60%;
`;

const GraphWap = styled.div`
  display : flex;
  flex-direction : row;
  width : 90%;
  height : 90%;

`;

const EditWap = styled.div`
  width : 80%;
`;

const Wrap = styled.div`
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
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const MainTop = styled.div`
  margin-top : 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Title = styled.div`
  padding: 15px 75px;
  font-size: 50px;
  font-weight: 700;
  color: #000000;
`;

const Contents = styled.div`
  display: flex;
  width: 100%;
  align-items : center;
  flex-direction: row;
  padding: 30px 0 40px 0;
`;
const NameRow = styled.div`
  text-align : left;
  margin-bottom: 20px;
`;
const InfoRow = styled.div`
  text-align: end;
`;
const EmailRow = styled.div``;
const PasswordRow = styled.div`
  text-align : left;
  margin-bottom: 15px;
`;
const EditRow = styled.div`
  display : flex;
  flex-direction : row;
  height : 100%;
  width: 600px;
  box-shadow: 9px 9px 16px rgb(163 177 198 / 60%),
    -9px -9px 16px rgb(255 255 255 / 50%);
  border-radius: 20px;
  padding: 20px;
  margin-left: 65px;
`;
const Btn = styled.button`
  font-size : 14px;
  margin-bottom : 7px;
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
const Editinput = styled.input`
font-size : 16px;
padding-left : 15px;
width : 100%;
height : 2rem;
margin : 5px;
border : 1px solid transparent;
background-color : #f3f3f4;
border-radius : 10px;
:: placeholder {
    font-size : 16px;
}

&:focus {
    outline : none;
}


`;
export default MyPage;
