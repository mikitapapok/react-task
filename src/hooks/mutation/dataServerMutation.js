import { useMutation } from 'react-query';
import { postMethod } from '../../services/userService';

export const useMutationDataServer = () => {
    return useMutation((payload) => {
        postMethod(payload);
    });
};
