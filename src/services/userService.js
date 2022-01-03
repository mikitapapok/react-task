import axios from 'axios';
import { serverPath } from '../constants/constants';

export const fetchUsers = () => {
    return axios.get(`${serverPath}/users`);
};

export const postMethod = (dataToPost) => {
    axios.post(`${serverPath}/users`, dataToPost);
};
