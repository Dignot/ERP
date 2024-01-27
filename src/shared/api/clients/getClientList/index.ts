import { http } from 'shared/api/axios';
import { IS_MOCK } from 'shared/constants/project';

export const getClientList = () => {
  if (IS_MOCK) return;

  return http.post<undefined, undefined>('/list', undefined);
};
