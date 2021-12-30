import {
    ADD_TODO,
    CHANGE_TODO,
    GET_USER_INFO,
    LOG_OUT,
    SET_NEW_TODOS,
    SHARE_TODO,
} from './actionTypes';

export const getUserInfo = (userInfo) => {
    return { type: GET_USER_INFO, payload: userInfo };
};
export const logOut = () => {
    return { type: LOG_OUT };
};

export const changeTodo = (todo) => {
    return { type: CHANGE_TODO, payload: todo };
};

export const shareTodo = (todo) => {
    return { type: SHARE_TODO, payload: todo };
};

export const addTodo = (todo) => {
    return { type: ADD_TODO, payload: todo };
};

export const setNewTodos = (todos) => {
    return { type: SET_NEW_TODOS, payload: todos };
};
