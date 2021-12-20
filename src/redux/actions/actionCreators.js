import { GET_USER_INFO } from './actionTypes';

export const getUserInfo = (userInfo) => {
    return { type: GET_USER_INFO, payload: userInfo };
};
