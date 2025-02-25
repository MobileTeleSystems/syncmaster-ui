import { TransferParamsFileConnectionType, TransferTargetParamsFileConnectionType } from './types';

/** Guard for checking whether the type of transfer file connection (HDFS, S3) belongs to target params */
export const isTargetParamsFileConnectionType = (
  params: TransferParamsFileConnectionType,
): params is TransferTargetParamsFileConnectionType => {
  return (params as TransferTargetParamsFileConnectionType).file_name_template !== undefined;
};
