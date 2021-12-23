import axios from 'axios';
import { serverPath } from '../constants/noteList';

export const fetchUsers = async () => {
    return await axios.get(serverPath);
};

export const postMethod = (dataToPost) => {
    axios.post(serverPath, dataToPost);
};
