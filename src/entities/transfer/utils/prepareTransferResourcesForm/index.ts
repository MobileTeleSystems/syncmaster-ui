import { FileSizeUnitValue } from '@entities/file/@x/transfer';
import { TransferResources } from '@entities/transfer';

/** Util for mapping of transfer resources data from backend to appropriate form value  */
export const prepareTransferResourcesForm = (data: TransferResources): TransferResources => {
  return {
    ...data,
    ram_bytes_per_task: +data.ram_bytes_per_task / FileSizeUnitValue.GiB,
  };
};
