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
    return axiosInstance.get('groups', { params });
  },

  getGroup: ({ id }: GetGroupRequest): Promise<Group> => {
    return axiosInstance.get(`groups/${id}`);
  },

  createGroup: (data: CreateGroupRequest): Promise<GroupData> => {
    return axiosInstance.post(`groups`, data);
  },

  updateGroup: ({ id, ...data }: UpdateGroupRequest): Promise<GroupData> => {
    return axiosInstance.put(`groups/${id}`, data);
  },

  getGroupUsers: ({ id }: GetGroupUsersRequest): Promise<PaginationResponse<GroupUser>> => {
    return axiosInstance.get(`groups/${id}/users`);
  },

  addGroupUser: ({ groupId, userId, ...data }: AddGroupUserRequest): Promise<null> => {
    return axiosInstance.post(`groups/${groupId}/users/${userId}`, data);
  },

  updateGroupUser: ({ groupId, userId, ...data }: UpdateGroupUserRequest): Promise<null> => {
    return axiosInstance.put(`groups/${groupId}/users/${userId}`, data);
  },

  deleteGroupUser: ({ groupId, userId }: DeleteGroupUserRequest): Promise<null> => {
    return axiosInstance.delete(`groups/${groupId}/users/${userId}`);
  },
};
