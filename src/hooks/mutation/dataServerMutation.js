import { useMutation } from 'react-query';
import { postMethod } from '../../services/userService';

export const useMutationDataServer = () => {
    return useMutation((dataToPost) => {
        postMethod(dataToPost);
    });
};
