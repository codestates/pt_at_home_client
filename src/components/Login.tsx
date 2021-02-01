import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LoginProps } from '../containers/LoginContainer';
import img from '../img/img1.png';
import logo from '../img/savemehomt_logo.png'
import kakao from '../img/kakao.png'
import google from '../img/google.png'
import github from '../img/github.png'

const Login = ({
    loginHandler,
    kakaoLoginHandler,
    googleLoginHandler,
    githubLoginHandler
}:LoginProps):JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertMsg, setAlertMsg] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        if (e.target.name === 'email') setEmail(e.target.value)
        else if (e.target.name === 'password') setPassword(e.target.value)
    }

    const clickLoginHandler = () => {
        if (!email || !password ) {
          setAlertMsg("모든 항목은 필수입니다.")
        } else if (!/^[0-9a-zA-Z]([-_\]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email)) {
          setAlertMsg("이메일 형식이 아닙니다.")
        } else {
            loginHandler({email, password}, 'savemehomt')
        }
    }

    return (
        <MainContainer>
            <LoginSectionImg>
                <Img src={img}/>
                <Bottom>Heathy is the important</Bottom>
            </LoginSectionImg>
            <SectionLogin>
                <Link to='/'><LoginLogo src={logo}></LoginLogo></Link>
                <LoginMainContainer>
                    <LoginText>Login</LoginText>
                    {/* <EmailText>email</EmailText> */}
                    <LoginInput type="email" placeholder='email' name='email' value={email} onChange={handleChange}/>
                    {/* <EmailText>password</EmailText> */}
                    <LoginInput type="password" placeholder='password' name='password' value={password} onChange={handleChange}/>
                    <AlertMsg>{alertMsg}</AlertMsg>
                    <LoginButton type="button" value="Login" onClick={clickLoginHandler}/>
                    <LineBox></LineBox>
                    <LoginSocial>
                        <LoginGithub onClick={githubLoginHandler}></LoginGithub>
                        <LoginGoogle onClick={googleLoginHandler}></LoginGoogle>
                        <LoginKakao type="button" value="KAKAO LOGIN" onClick={kakaoLoginHandler}/>
                    </LoginSocial>
                    <SignUpContainer>
                        <SignUpText>Not a member yet?</SignUpText>
                        <SignUpLink to={'/signup'}>Click me to Signup!</SignUpLink>
                    </SignUpContainer>
                </LoginMainContainer>
            </SectionLogin>
        </MainContainer>
    );
};

const SignUpLink = styled(Link)`
    text-decoration: none;
    font-size : 20px;
    margin-left : 15px;
    color : #f0a500;
`;

const MainContainer = styled.div`
    display : flex;
    height : 100%;
`;

const LoginSectionImg = styled.section`
    display : flex;
    flex-direction : column;
    height : 100%;
    width : 500px;
    @media (max-width: 938px) {
        display : none;
    }
`;

const LoginLogo = styled.img`
position: absolute;
top:30px;
right:40px;
max-width: 120px;
`;

const Img = styled.img`
    height : 80%;
    object-fit : fill;
`;

const Bottom = styled.div`
    background-color : #f4be70;
    text-shadow: -1px -0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-size : 30px;
    height : 100%;
    text-align : center;
    line-height:180px;
`;

const SectionLogin = styled.section`
    width : 100%;
    align-items : center;
    display : flex;
    flex-direction : column;
    justify-content : center;
`;

const LoginMainContainer = styled.div`
    display : flex;
    flex-direction : column;
    height : 50%;
`;

const LoginText = styled.h2`
    font-size : 50px;
    text-align : center;
    margin-bottom : 20px;
    vertical-align:middle;
`;

const EmailText = styled.h3`
    font-size : 20px;
`;

const LoginInput = styled.input`
    font-size : 16px;
    padding-left : 15px;
    width : 400px;
    height : 2.5rem;
    margin : 5px;
    border : 1px solid transparent;
    background-color : #eeeeee;
    margin-bottom : 15px;
    border-radius : 10px;
    :: placeholder {
        font-size : 16px;
    }
    &:focus {
        outline : none;
    }
`;

const AlertMsg = styled.div`
    text-align:center;
    color:#de4463;
    padding:10px 0;
`

const LoginButton = styled.input`
    font-size : 20px;
    background-color :  #f497ad;
    width : 400px;
    height : 2.5rem;
    margin : 5px;
    border : 1px solid transparent;
    margin-bottom : 15px;
    border-radius : 10px;

`;

const LineBox = styled.div`
    border-top : 1px solid #e0e0e0;
    margin : 20px;
    text-align : center;
    overflow : visible;
    &:after {
        content : 'Or';
        position : relative;
        top: -7px;
        background-color : White;
        padding : 10px;
    }
`;

const LoginSocial = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    height : 10%;
`;

const LoginGithub = styled.button`
    background-image: url(${github});
    background-repeat: no-repeat;
    border : 1px solid white;
    border-radius : 30px;
    height : 54px;
    width : 58px;
    margin-right : 50px;
`;


const LoginGoogle = styled.button`
    background-image: url(${google});
    background-repeat: no-repeat;
    border : 1px solid white;
    border-radius : 30px;
    height : 56px;
    width : 56px;
    margin-right : 50px;;
`;

const LoginKakao = styled.button`
    background-image: url(${kakao});
    background-repeat: no-repeat;
    border : 1px solid white;
    border-radius : 30px;
    height : 60px;
    width : 61px;
`;

const SignUpContainer = styled.div`
    margin-top : 40px;
    display : flex;
    flex-direction : row;
    justify-content:center;
`;

const SignUpText = styled.h3`
    font-size : 20px;
`;

export default Login;