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
    return axiosInstance.get('transfers', { params });
  },

  getTransfer: ({ id }: GetTransferRequest): Promise<Transfer> => {
    return axiosInstance.get(`transfers/${id}`);
  },

  createTransfer: (data: CreateTransferRequest): Promise<Transfer> => {
    return axiosInstance.post(`transfers`, data);
  },

  updateTransfer: ({ id, ...data }: UpdateTransferRequest): Promise<Transfer> => {
    return axiosInstance.put(`transfers/${id}`, data);
  },

  deleteTransfer: ({ id }: DeleteTransferRequest): Promise<null> => {
    return axiosInstance.delete(`transfers/${id}`);
  },
};
