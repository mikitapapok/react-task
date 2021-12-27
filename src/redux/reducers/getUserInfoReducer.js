import { GET_USER_INFO, LOG_OUT } from '../actions/actionTypes';

const localStorage = window.localStorage;
const initState = {
    user: {},
    access: JSON.parse(localStorage.getItem('access')) || false,
};

export const getUserInfoReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            state.user = action.payload;
            if (action.payload) {
                state.access = true;
                localStorage.setItem('access', true);
            }
            break;
        case LOG_OUT:
            state.access = false;
            localStorage.setItem('access', false);
            break;
        default:
            return state;
    }
    return state;
};
