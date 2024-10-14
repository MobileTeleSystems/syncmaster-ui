import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import {
  CreateGroupRequest,
  GetGroupRequest,
  GetGroupsRequest,
  Group,
  GroupFromList,
  UpdateGroupRequest,
} from './types';

export const groupService = {
  getGroups: (params: GetGroupsRequest): Promise<PaginationResponse<GroupFromList>> => {
    return axiosInstance.get('groups', { params });
  },

  getGroup: ({ id }: GetGroupRequest): Promise<Group> => {
    return axiosInstance.get(`groups/${id}`);
  },

  createGroup: (data: CreateGroupRequest): Promise<Group> => {
    return axiosInstance.post(`groups`, data);
  },

  updateGroup: ({ id, ...data }: UpdateGroupRequest): Promise<Group> => {
    return axiosInstance.patch(`groups/${id}`, data);
  },
};
