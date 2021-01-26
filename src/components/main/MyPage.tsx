import React, {useState} from 'react';
import {MyPageProps} from '../../containers/MyPageContainer'

const MyPage = ({isLogin, userInfo, updateUserInfo, resignHandler}:MyPageProps):JSX.Element => {
    const [userName, setUserName] = useState(userInfo.userName)
    const [email, setEmail] = useState(userInfo.email)
    const [password, setPassword] = useState('')
    const [confirmPW, setConfirmPW] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        if (e.target.name === 'email') setEmail(e.target.value)
        else if (e.target.name === 'userName') setUserName(e.target.value)
        else if (e.target.name === 'password') setPassword(e.target.value)
        else if (e.target.name === 'confirmPW') setConfirmPW(e.target.value)
    }

    return (
        <div>
            { !isLogin ?
                (<>
                    <div>{userInfo.id}</div>
                    <input type="text" value={userName}  onChange={handleChange} />
                    <input type="email" value={email} onChange={handleChange} />
                    <input type="password" value={password} onChange={handleChange} />
                    <input type="button" value="Leave Website" onClick={() => resignHandler(userInfo.userName)}/>
                    <input type="button" value="Update" onClick={() => updateUserInfo({userName, password})}/>
                </>)
                :
                (<>GUEST</>)
            }
        </div>
    );
};

export default MyPage;

