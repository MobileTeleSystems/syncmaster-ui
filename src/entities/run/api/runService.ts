import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import { GetRunRequest, Run, GetRunsRequest, CreateRunRequest } from './types';

export const runService = {
  getRuns: (params: GetRunsRequest): Promise<PaginationResponse<Run>> => {
    return axiosInstance.get('v1/runs', { params });
  },

  getRun: ({ id }: GetRunRequest): Promise<Run> => {
    return axiosInstance.get(`v1/runs/${id}`);
  },

  createRun: (data: CreateRunRequest): Promise<Run> => {
    return axiosInstance.post('v1/runs', data);
  },
};
