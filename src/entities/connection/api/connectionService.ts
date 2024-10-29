import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import { GetConnectionsRequest, Connection, GetConnectionRequest } from './types';

export const connectionService = {
  getConnections: (params: GetConnectionsRequest): Promise<PaginationResponse<Connection>> => {
    return axiosInstance.get('connections', { params });
  },

  getConnection: ({ id }: GetConnectionRequest): Promise<Connection> => {
    return axiosInstance.get(`connections/${id}`);
  },
};
