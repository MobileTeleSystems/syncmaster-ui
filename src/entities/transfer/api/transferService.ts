import { axiosInstance } from '@shared/config';
import { PaginationResponse } from '@shared/types';

import {
  CreateTransferRequest,
  DeleteTransferRequest,
  GetTransferRequest,
  GetTransfersRequest,
  Transfer,
  UpdateTransferRequest,
} from './types';

export const transferService = {
  getTransfers: (params: GetTransfersRequest): Promise<PaginationResponse<Transfer>> => {
    return axiosInstance.get('v1/transfers', { params });
  },

  getTransfer: ({ id }: GetTransferRequest): Promise<Transfer> => {
    return axiosInstance.get(`v1/transfers/${id}`);
  },

  createTransfer: (data: CreateTransferRequest): Promise<Transfer> => {
    return axiosInstance.post(`v1/transfers`, data);
  },

  updateTransfer: ({ id, ...data }: UpdateTransferRequest): Promise<Transfer> => {
    return axiosInstance.put(`v1/transfers/${id}`, data);
  },

  deleteTransfer: ({ id }: DeleteTransferRequest): Promise<null> => {
    return axiosInstance.delete(`v1/transfers/${id}`);
  },
};
