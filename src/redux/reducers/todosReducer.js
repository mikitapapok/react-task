import { v4 as uuid } from 'uuid';
import { ADD_TODO, CHANGE_TODO, SHARE_TODO } from '../actions/actionTypes';

const storage = window.localStorage;
const initState = JSON.parse(storage.getItem('todoList')) || {
    todos: [
        {
            id: uuid(),
            title: 'React router 1',
            description: 'buy fish',
            date: new Date('2.02.2019').toDateString(),
        },
        {
            id: uuid(),
            title: 'React router 2',
            description: 'pbuy meet',
            date: new Date('2.02.2019').toDateString(),
        },
        {
            id: uuid(),
            title: 'React router 3',
            description: 'buy milk',
            date: new Date('2.02.2019').toDateString(),
        },
    ],
    sharedTodos: [
        {
            id: uuid(),
            title: 'delectus aut autem',
            description: 'id labore ex et quam laborum',
            date: new Date('3.08.2000').toDateString(),
        },
        {
            id: uuid(),
            title: 'quis ut nam facilis et officia qui',
            description: 'quo vero reiciendis velit similique earum',
            date: new Date('4.09.2010').toDateString(),
        },
        {
            id: uuid(),
            title: 'fugiat veniam minus',
            description: 'odio adipisci rerum aut animi',
            date: new Date('7.07.2008').toDateString(),
        },
        {
            id: uuid(),
            title: 'et porro tempora',
            description: 'alias odio sit',
            date: new Date('3.08.2025').toDateString(),
        },
        {
            id: uuid(),
            title: 'laboriosam mollitia et enim quasi',
            description: 'vero eaque aliquid doloribus et culpa',
            date: new Date('3.03.2012').toDateString(),
        },
        {
            id: uuid(),
            title: 'qui ullam ratione quibusdam ',
            description: 'et fugit eligendi deleniti quidem qui sint nihil autem',
            date: new Date('10.08.2007').toDateString(),
        },
        {
            id: uuid(),
            title: 'illo expedita consequatur quia in',
            description: 'repellat consequatur praesentium vel minus molestias voluptatum',
            date: new Date('3.12.2008').toDateString(),
        },
        {
            id: uuid(),
            title: 'quo adipisci enim quam ut ab',
            description: 'provident id voluptas',
            date: new Date('2.02.2019').toDateString(),
        },
    ],
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
        default:
            return state;
    }
    return state;
};
