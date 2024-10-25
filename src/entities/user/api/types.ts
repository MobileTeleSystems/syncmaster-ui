import { PaginationRequest } from '@shared/types';

export interface User {
  id: number;
  username: string;
  is_superuser: boolean;
}

//TODO: This interface will be extended
export interface GetUsersRequest extends PaginationRequest {}

export interface GetUserRequest {
  id: number;
}
