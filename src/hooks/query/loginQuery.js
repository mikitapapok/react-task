import { useQuery } from 'react-query';
import { fetchUsers } from '../../services/userService';

const USER_DATA = 'USER_DATA';
export const useQueryToLogin = (config) => {
    const response = useQuery(
        USER_DATA,
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
