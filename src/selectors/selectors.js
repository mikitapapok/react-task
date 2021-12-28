import { store } from '../redux/store';

export const getAccess = () => store.getState().userInfo.access;
export const getTodos = () => store.getState().todos;
export const getState = (state) => state.todos;
