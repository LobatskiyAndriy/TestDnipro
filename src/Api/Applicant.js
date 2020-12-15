import { authRequest } from './utils';

export const getClientApplicants = (id) => {
  return authRequest({
    method: 'GET',
    url: `/applicants?filter[client:id]=${id}`,
  });
};