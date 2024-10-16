import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import {
  AddUserToGroupRequest,
  CreateGroupRequest,
  DeleteUserFromGroupRequest,
  GetGroupRequest,
  GetGroupsRequest,
  GetUsersInGroupRequest,
  Group,
  GroupFromList,
  UpdateGroupRequest,
  UpdateUserInGroupRequest,
  UserInGroup,
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

  getUsersInGroup: ({ id }: GetUsersInGroupRequest): Promise<PaginationResponse<UserInGroup>> => {
    return axiosInstance.get(`groups/${id}/users`);
  },

  addUserToGroup: ({ groupId, userId, ...data }: AddUserToGroupRequest): Promise<null> => {
    return axiosInstance.post(`groups/${groupId}/users/${userId}`, data);
  },

  updateUserInGroup: ({ groupId, userId, ...data }: UpdateUserInGroupRequest): Promise<null> => {
    return axiosInstance.patch(`groups/${groupId}/users/${userId}`, data);
  },

  deleteUserFromGroup: ({ groupId, userId }: DeleteUserFromGroupRequest): Promise<null> => {
    return axiosInstance.delete(`groups/${groupId}/users/${userId}`);
  },
};
