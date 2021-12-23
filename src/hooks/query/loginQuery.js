import { useQuery } from 'react-query';
import { fetchUsers } from '../../services/userService';

export const useQueryToLogin = (config) => {
    const response = useQuery('login', () => fetchUsers(), config);

    return response;
};
