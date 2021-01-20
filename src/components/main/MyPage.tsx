import React from 'react';
import {MyPageProps} from '../../containers/MyPageContainer'

const MyPage = ({userInfo, updateUserInfo}:MyPageProps):JSX.Element => {
    return (
        <div>
            <div>{userInfo.id}</div>
            <div>{userInfo.userName}</div>
            <div>{userInfo.email}</div>
            <div>{userInfo.token}</div>
        </div>
    );
};

export default MyPage;
