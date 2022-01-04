import { store } from '../redux/store';

export const getAccess = () => store.getState().userInfo.access;
export const getTodos = () => store.getState().todos;
export const selectTodoList = (state) => state.todos.todos;
export const selectSharedTodos = (state) => state.todos.sharedTodos;
