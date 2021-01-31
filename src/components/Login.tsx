import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { LoginProps } from '../containers/LoginContainer'
import img from '../img/img1.png';
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

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        if (e.target.name === 'email') setEmail(e.target.value)
        else if (e.target.name === 'password') setPassword(e.target.value)
    }

    return (
        <MainContainer>
            <LoginSectionImg>
                <Img src={img}/>
                <Bottom>Back to the dashboard</Bottom>
            </LoginSectionImg>
            <SectionLogin>
                <LoginMainContainer>
                    <LoginText>Login</LoginText>
                    <EmailText>email</EmailText>
                    <LoginInput type="email" placeholder='Email' name='email' value={email} onChange={handleChange}/>
                    <EmailText>password</EmailText>
                    <LoginInput type="password" placeholder='password' name='password' value={password} onChange={handleChange}/>
                    <LoginButton type="button" value="Login" onClick={() => loginHandler({email, password}, 'savemehomt')}/>
                    <LineBox></LineBox>
                    <LoginSocial>
                        <LoginGithub onClick={githubLoginHandler}></LoginGithub>
                        <LoginGoogle onClick={googleLoginHandler}></LoginGoogle>
                        <input type="button" value="KAKAO LOGIN" onClick={kakaoLoginHandler}/>
                    </LoginSocial>
                    <SignUpContainer>
                        <SignUpText>Not a member ?</SignUpText>
                        <Link to={'/signup'}>Sign up now</Link>
                    </SignUpContainer>
                </LoginMainContainer>
            </SectionLogin>
        </MainContainer>
    );
};

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


const Img = styled.img`
    height : 80%;
    object-fit : fill;
`;

const Bottom = styled.div`
    background-color : #f4be70;
    height : 100%;
    text-align : center;
    justify-content : center;
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
`;

const EmailText = styled.h3`
    font-size : 20px;
`;

const LoginInput = styled.input`
    width : 400px;
    height : 2.5rem;
    margin : 5px;
    border : 1px solid transparent;
    background-color : #f3f3f4;
    margin-bottom : 15px;
    border-radius : 10px;
`;

const LoginButton = styled.input`
    font-size : 20px;
    background-color :  #f4be70;
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
    height : 56px;
    width : 56px;
    margin-right : 50px;
`;

const LoginGoogle = styled.button`
    background-image: url(${google});
    background-repeat: no-repeat;
    border : 1px solid white;
    border-radius : 30px;
    height : 54px;
    width : 58px;
`;

const SignUpContainer = styled.div`
    margin-top : 40px;
    display : flex;
    flex-direction : row;
`;

const SignUpText = styled.h3`
    font-size : 20px;
`;

export default Login;