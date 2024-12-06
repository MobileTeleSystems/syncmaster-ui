import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import { DeleteTransferRequest, GetTransferRequest, GetTransfersRequest, Transfer } from './types';

export const transferService = {
  getTransfers: (params: GetTransfersRequest): Promise<PaginationResponse<Transfer>> => {
    return axiosInstance.get('transfers', { params });
  },

  getTransfer: ({ id }: GetTransferRequest): Promise<Transfer> => {
    return axiosInstance.get(`transfers/${id}`);
  },

  deleteTransfer: ({ id }: DeleteTransferRequest): Promise<null> => {
    return axiosInstance.delete(`transfers/${id}`);
  },
};
