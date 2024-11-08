import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import { GetRunRequest, Run, GetRunsRequest } from './types';

export const runService = {
  getRuns: (params: GetRunsRequest): Promise<PaginationResponse<Run>> => {
    return axiosInstance.get('runs', { params });
  },

  getRun: ({ id }: GetRunRequest): Promise<Run> => {
    return axiosInstance.get(`runs/${id}`);
  },
};
