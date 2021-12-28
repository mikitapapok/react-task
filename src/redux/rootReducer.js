import { combineReducers } from 'redux';
import { getUserInfoReducer } from './reducers/getUserInfoReducer';
import { todoReducer } from './reducers/todosReducer';

export const rootReducer = combineReducers({
    userInfo: getUserInfoReducer,
    todos: todoReducer
});
