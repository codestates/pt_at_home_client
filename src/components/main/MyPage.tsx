import React, { useState } from 'react';
import styled from 'styled-components';
import { MyPageProps } from '../../containers/MyPageContainer';
import chart from '../../img/chart2.svg';
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
  const [alertMsg, setAlertMsg] = useState('')

  const EditButton = () => {
    setEdit(!edit);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'email') setEmail(e.target.value);
    else if (e.target.name === 'userName') setUserName(e.target.value);
    else if (e.target.name === 'password') setPassword(e.target.value);
    else if (e.target.name === 'confirmPW') setConfirmPW(e.target.value);
  };

  const clickUpdateInfoHandler = () => {
    if (!email || !password || !userName || !confirmPW) {
      setAlertMsg("모든 항목은 필수입니다.")
    } else if (password !== confirmPW) {
      setAlertMsg("비밀번호가 맞지않습니다.")
    } else if (!/^[0-9a-zA-Z]([-_\]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email)) {
      setAlertMsg("이메일 형식이 아닙니다.")
    } else if (!/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&+=]).*$/.test(password)) {
      setAlertMsg(`대/소문자, 특수문자, 숫자가 하나 이상씩 들어가야 합니다. 비밀번호가 8-15여야 합니다.`)
    } else {
      updateUserInfo({ userName, password })  
    }
}


  return (
    <Wrap>
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
                      <NameRow>{`Email : ${email}`}</NameRow>
                      <EmailRow>{`User Name : ${userName}`}</EmailRow>
                    </UserIngoBox>
                    <BtnBox>
                      <Btn onClick={EditButton}>
                      {!edit ? 'MODIFY' : 'CANCEL'}
                      </Btn>
                    </BtnBox>
                  </EditRow>
                ) : (
                  <EditRow>
                    <InfoRow>
                      <NameRow>
                        {`New User Name : `}
                        <Editinput
                          type="text"
                          value={userName}
                          name="userName"
                          onChange={handleChange}
                        />
                      </NameRow>
                      <PasswordRow>
                        {`Current Password : `}
                        <Editinput
                          type="password"
                          placeholder="현재 비밀번호를 입력해주세요"
                          name="password"
                        />
                      </PasswordRow>
                      <PasswordRow>
                        {`New Password : `}
                        <Editinput
                          type="password"
                          placeholder="바꿀 새 비밀번호를 입력해주세요"
                          name="password"
                        />
                      </PasswordRow>
                      <PasswordRow>
                        {`Confirm New Password: `}
                        <Editinput
                          type="password"
                          placeholder="새 비밀번호를 한번 더 입력해주세요"
                          name="password"
                          onChange={handleChange}
                        />
                      </PasswordRow>
                      <AlertMsg>{alertMsg}</AlertMsg>
                    </InfoRow>
                    <SaveBtnWrap>
                      <BtnBoxEdit>
                        <Btn onClick={EditButton}>
                            {!edit ? 'MODIFY' : 'CANCEL'}
                        </Btn>
                        <Btn
                          onClick={clickUpdateInfoHandler}
                        >
                          SAVE
                        </Btn>
                      </BtnBoxEdit>
                    </SaveBtnWrap>
                  </EditRow>
                )}
                </EditWap>
              </Contents>
            <ImgBox>
              <GraphWap>
                <ImgText>총 소비 칼로리와 운동시간을 나타낸 그래프입니다.</ImgText>
                <Img src={graph}></Img>
              </GraphWap>
              <ChartWap>
                <ImgText>부위별 운동량 지표입니다.</ImgText>
                <ImgChart src={chart}></ImgChart>
              </ChartWap>
            </ImgBox>
            <ResignBtnBox>
              <Btn onClick={() => resignHandler(userInfo.email)}>
                  Leave Website
              </Btn>
            </ResignBtnBox>
          </Main>
        </MainWrap>
    </Wrap>
  )
};

const Img = styled.img`
  width : 100%;
`;


const ImgBox = styled.div`
  display : flex;
  flex-direction : row;

`;

const ImgChart = styled.img`
  width : 60%;
  margin : 50px;
`;

const ChartWap = styled.div`
  display : flex;
  align-items : center;
  flex-direction : column;
  width : 100%;
  height : 100%;


`;

const GraphWap = styled.div`
  display : flex;
  align-items : center;
  flex-direction : column;
  width : 100%;
  height : 90%;

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
  font-weight : bold;
  font-size : 20px;
  width : 100%;
  height : 100%;
  text-align : center;
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
  margin: 0 60px;
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
  padding: 30px 0 100px 0;
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
  box-shadow: 3px 3px 3px 3px gray;
  border-radius: 20px;
  padding: 20px;
  margin-left: 65px;
`;
const Btn = styled.button`
  font-size : 14px;
  margin-bottom : 20px;
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

const AlertMsg = styled.div`
    text-align:center;
    color:#de4463;
    padding:10px 0;
`

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
background-color : #d9e4dd;
border-radius : 10px;
:: placeholder {
    font-size : 16px;
}

&:focus {
    outline : none;
}


`;
export default MyPage;
