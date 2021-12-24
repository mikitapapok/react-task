import { useQuery } from 'react-query';
import { fetchUsers } from '../../services/userService';

const FETCH_USERS = 'FETCH_USERS';
export const useQueryToLogin = (config = { enabled: false }) => {
    const response = useQuery(
        FETCH_USERS,
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
