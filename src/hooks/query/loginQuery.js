import { useQuery } from 'react-query';
import { fetchUsers } from '../../services/userService';

const LOGIN_USER = 'LOGIN_USER';
export const useQueryToLogin = (config) => {
    const response = useQuery(
        LOGIN_USER,
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
