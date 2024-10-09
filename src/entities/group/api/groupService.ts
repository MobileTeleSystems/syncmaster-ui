import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import { GetGroupRequest, GetGroupsRequest, Group } from './types';

export const groupService = {
  getGroups: (params: GetGroupsRequest): Promise<PaginationResponse<Group>> => {
    return axiosInstance.get('groups', { params });
  },

  getGroup: ({ id }: GetGroupRequest): Promise<Group> => {
    return axiosInstance.get(`groups/${id}`);
  },
};
