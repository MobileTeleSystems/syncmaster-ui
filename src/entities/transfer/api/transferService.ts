import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import { GetTransferRequest, GetTransfersRequest, Transfer } from './types';

export const transferService = {
  getTransfers: (params: GetTransfersRequest): Promise<PaginationResponse<Transfer>> => {
    return axiosInstance.get('transfers', { params });
  },

  getTransfer: ({ id }: GetTransferRequest): Promise<Transfer> => {
    return axiosInstance.get(`transfers/${id}`);
  },
};
