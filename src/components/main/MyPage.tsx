import React from 'react';
import {MyPageProps} from '../../containers/MyPageContainer'

const MyPage = ({userInfo, updateUserInfo, resignHandler}:MyPageProps):JSX.Element => {
    return (
        <div>
            <div>{userInfo.id}</div>
            <div>{userInfo.userName}</div>
            <div>{userInfo.email}</div>
            <div>{userInfo.token}</div>
            <input type="button" value="Leave Website" onClick={() => resignHandler(userInfo.userName)}/>
        </div>
    );
};

export default MyPage;

