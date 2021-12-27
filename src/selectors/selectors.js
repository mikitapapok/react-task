import { store } from '../redux/store';

export const getAccess =()=>store.getState().userInfo.access;
