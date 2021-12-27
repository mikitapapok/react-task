import { combineReducers } from 'redux';
import { getUserInfoReducer } from './reducers/getUserInfoReducer';

export const rootReducer = combineReducers({
    userInfo: getUserInfoReducer,
});
