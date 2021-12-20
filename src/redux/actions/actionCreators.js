import { GET_USER_INFO, LOG_OUT } from './actionTypes';

export const getUserInfo = (userInfo) => {
    return { type: GET_USER_INFO, payload: userInfo };
};
export const logOut = () => {
    return { type: LOG_OUT };
};
