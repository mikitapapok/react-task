import { store } from '../redux/store';

export const getAccess = () => store.getState().userInfo.access;
export const getTodos = () => store.getState().todos;
export const getTodoList = (state) => state.todos.todos;
export const getSharedTodos = (state) => state.todos.sharedTodos;
