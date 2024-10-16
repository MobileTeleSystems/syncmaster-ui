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
  id: number | string;
}

export interface CreateGroupRequest {
  name: string;
  description: string;
}

export interface UpdateGroupRequest {
  id: number | string;
  name: string;
  description: string;
  owner_id: number;
}

export interface GetUsersInGroupRequest extends PaginationRequest {
  id: number | string;
}

export interface UserInGroup {
  id: number;
  username: string;
  role: keyof typeof UserRole;
}

export interface AddUserToGroupRequest {
  groupId: number | string;
  userId: number | string;
  role: keyof typeof UserRole;
}

export interface UpdateUserInGroupRequest extends AddUserToGroupRequest {}
export interface DeleteUserFromGroupRequest {
  groupId: number | string;
  userId: number | string;
}
