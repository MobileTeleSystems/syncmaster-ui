import { TransferSourceConnectionFileType, TransferTargetConnectionFileType } from '@entities/transfer';

/** Guard for checking whether the type of transfer file connection (HDFS, S3) belongs to target params */
export const isTargetParamsFileConnectionType = (
  params: TransferSourceConnectionFileType | TransferTargetConnectionFileType,
): params is TransferTargetConnectionFileType => {
  return (params as TransferTargetConnectionFileType).file_name_template !== undefined;
};
