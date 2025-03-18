import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import {
  GetConnectionsRequest,
  Connection,
  GetConnectionRequest,
  CreateConnectionRequest,
  UpdateConnectionRequest,
  DeleteConnectionRequest,
} from './types';

export const connectionService = {
  getConnections: (params: GetConnectionsRequest): Promise<PaginationResponse<Connection>> => {
    return axiosInstance.get('connections', { params });
  },

  getConnection: ({ id }: GetConnectionRequest): Promise<Connection> => {
    return axiosInstance.get(`connections/${id}`);
  },

  createConnection: (data: CreateConnectionRequest): Promise<Connection> => {
    return axiosInstance.post(`connections`, data);
  },

  updateConnection: ({ id, ...data }: UpdateConnectionRequest): Promise<Connection> => {
    return axiosInstance.put(`connections/${id}`, data);
  },

  deleteConnection: ({ id }: DeleteConnectionRequest): Promise<null> => {
    return axiosInstance.delete(`connections/${id}`);
  },
};
