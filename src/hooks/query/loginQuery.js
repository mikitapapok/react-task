import { useQuery } from 'react-query';
import { fetchUsers } from '../../services/userService';

const FETCH_USERS_DATA = 'FETCH_USERS_DATA';
export const useUsers = (config = {}) => {
    const response = useQuery(
        FETCH_USERS_DATA,
        async () => {
            const response = await fetchUsers();
            return response?.data;
        },
        {
            cacheTime: 0,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            ...config,
        }
    );
    return response;
};
