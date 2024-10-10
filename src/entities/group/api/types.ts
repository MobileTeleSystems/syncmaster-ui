import { PaginationRequest } from '@shared/types';

export interface Group {
  id: number;
  name: string;
  description: string;
  owner_id: number;
}

//TODO: This interface will be extended
export interface GetGroupsRequest extends PaginationRequest {}

export interface GetGroupRequest {
  id: number | string;
}
