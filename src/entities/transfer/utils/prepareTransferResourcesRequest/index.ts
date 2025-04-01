import { FileSizeUnit } from '@entities/file/@x/transfer';
import { TransferResources } from '@entities/transfer';

/** Util for mapping of transfer resources data from form value to appropriate value for backend  */
export const prepareTransferResourcesRequest = (data: TransferResources): TransferResources => {
  return {
    ...data,
    ram_bytes_per_task: `${data.ram_bytes_per_task}${FileSizeUnit.GiB}`,
  };
};
