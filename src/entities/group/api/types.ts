import { PaginationRequest, UserRole } from '@shared/types';

export interface Group {
  id: number;
  name: string;
  description: string;
  owner_id: number;
}

export interface GroupFromList {
  data: Group;
  role: keyof typeof UserRole;
}

//TODO: This interface will be extended
export interface GetGroupsRequest extends PaginationRequest {}

export interface GetGroupRequest {
  id: number;
}

export interface CreateGroupRequest {
  name: string;
  description: string;
}

export interface UpdateGroupRequest {
  id: number;
  name: string;
  description: string;
  owner_id: number;
}

export interface GetGroupUsersRequest extends PaginationRequest {
  id: number;
}

export interface GroupUser {
  id: number;
  username: string;
  role: keyof typeof UserRole;
}

export interface AddGroupUserRequest {
  groupId: number;
  userId: number;
  role: keyof typeof UserRole;
}

export interface UpdateGroupUserRequest extends AddGroupUserRequest {}
export interface DeleteGroupUserRequest {
  groupId: number;
  userId: number;
}
