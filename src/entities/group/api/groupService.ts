import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import {
  AddGroupUserRequest,
  CreateGroupRequest,
  DeleteGroupUserRequest,
  GetGroupRequest,
  GetGroupsRequest,
  GetGroupUsersRequest,
  Group,
  GroupData,
  GroupUser,
  UpdateGroupRequest,
  UpdateGroupUserRequest,
} from './types';

export const groupService = {
  getGroups: (params: GetGroupsRequest): Promise<PaginationResponse<Group>> => {
    return axiosInstance.get('v1/groups', { params });
  },

  getGroup: ({ id }: GetGroupRequest): Promise<Group> => {
    return axiosInstance.get(`v1/groups/${id}`);
  },

  createGroup: (data: CreateGroupRequest): Promise<GroupData> => {
    return axiosInstance.post(`v1/groups`, data);
  },

  updateGroup: ({ id, ...data }: UpdateGroupRequest): Promise<GroupData> => {
    return axiosInstance.put(`v1/groups/${id}`, data);
  },

  getGroupUsers: ({ id }: GetGroupUsersRequest): Promise<PaginationResponse<GroupUser>> => {
    return axiosInstance.get(`v1/groups/${id}/users`);
  },

  addGroupUser: ({ groupId, userId, ...data }: AddGroupUserRequest): Promise<null> => {
    return axiosInstance.post(`v1/groups/${groupId}/users/${userId}`, data);
  },

  updateGroupUser: ({ groupId, userId, ...data }: UpdateGroupUserRequest): Promise<null> => {
    return axiosInstance.put(`v1/groups/${groupId}/users/${userId}`, data);
  },

  deleteGroupUser: ({ groupId, userId }: DeleteGroupUserRequest): Promise<null> => {
    return axiosInstance.delete(`v1/groups/${groupId}/users/${userId}`);
  },
};
