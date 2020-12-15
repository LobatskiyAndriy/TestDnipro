import { authRequest } from './utils';

export const getClients = () => {
    return authRequest({
        method: 'GET',
        url: `/clients`,
    });
};