import { v4 as uuid } from 'uuid';
import { ADD_TODO, CHANGE_TODO, SHARE_TODO, SET_NEW_TODOS } from '../actions/actionTypes';
import { sharedTodos, todos } from '../../constants/constants';

const storage = window.localStorage;
const initState = JSON.parse(storage.getItem('todoList')) || {
    todos: todos,
    sharedTodos: sharedTodos,
};
export const todoReducer = (state = initState, action) => {
    let currentTodo;
    switch (action.type) {
        case CHANGE_TODO:
            currentTodo = state.todos.find((todo) => todo.id == action.payload.id);
            if (!currentTodo) {
                currentTodo = state.sharedTodos.find((todo) => todo.id == action.payload.id);
            }
            currentTodo.description = action.payload.description;
            storage.setItem('todoList', JSON.stringify(state));
            break;
        case SHARE_TODO:
            currentTodo = state.sharedTodos.find((todo) => todo.id === action.payload.id);
            if (!currentTodo) {
                state.sharedTodos = [...state.sharedTodos, action.payload];
                storage.setItem('todoList', JSON.stringify(state));
            }
            storage.setItem('todoList', JSON.stringify(state));
            break;
        case ADD_TODO:
            currentTodo = {
                title: action.payload.title,
                description: action.payload.description,
                date: new Date().toDateString(),
                id: uuid(),
            };
            state.todos = [...state.todos, currentTodo];
            storage.setItem('todoList', JSON.stringify(state));
            break;
        case SET_NEW_TODOS:
            if (!action.payload.condition) {
                state.todos = action.payload.todos;
            }
            if (action.payload.condition) {
                state.sharedTodos = action.payload.todos;
            }
            storage.setItem('todoList', JSON.stringify(state));
            break;

        default:
            return state;
    }
    return state;
};
