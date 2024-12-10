import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import { GetRunRequest, Run, GetRunsRequest, CreateRunRequest } from './types';

export const runService = {
  getRuns: (params: GetRunsRequest): Promise<PaginationResponse<Run>> => {
    return axiosInstance.get('runs', { params });
  },

  getRun: ({ id }: GetRunRequest): Promise<Run> => {
    return axiosInstance.get(`runs/${id}`);
  },

  createRun: (data: CreateRunRequest): Promise<Run> => {
    return axiosInstance.post('runs', data);
  },
};
