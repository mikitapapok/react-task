import { GET_USER_INFO } from '../actions/actionTypes';

const initState = {
    user :{},
    access: false
};

export const getUserInfoReducer = (state = initState, action) => {
    if (action.type === GET_USER_INFO) {
        state = action.payload;
        return state;
    }
    return state;
};
