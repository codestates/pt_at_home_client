const SET_USER_INFO = 'SET_USER_INFO';
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const RENEW_ACCESS_TOKEN = 'RENEW_ACCESS_TOKEN';

export interface UserInfo {
  id?: number;
  userName: string;
  email?: string;
  token?: string;
  expDate?: Date;
}

export interface ActionUserInfo {
  type: string;
  payload: UserInfo;
}

interface renewTokenType {
  token: string;
  expDate: Date;
}
interface ActionRenewToken {
  type: string;
  payload: renewTokenType;
}

const initialState: UserInfo = {
  id: 0,
  userName: 'GUEST',
  email: '',
  token: '',
  expDate: new Date(),
};

// Action Creator - userInfo
export const actionSetUserInfo = (payload: UserInfo): ActionUserInfo => ({
  type: SET_USER_INFO,
  payload,
});

export const actionUpdateUserInfo = (payload: UserInfo): ActionUserInfo => ({
  type: UPDATE_USER_INFO,
  payload,
});

export const actionRefreshToken = (
  payload: renewTokenType,
): ActionRenewToken => ({
  type: RENEW_ACCESS_TOKEN,
  payload,
});

const userInfo = (state = initialState, action: ActionUserInfo): UserInfo => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.payload;
    case UPDATE_USER_INFO:
      return { ...state, ...action.payload };
    case RENEW_ACCESS_TOKEN:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default userInfo;
