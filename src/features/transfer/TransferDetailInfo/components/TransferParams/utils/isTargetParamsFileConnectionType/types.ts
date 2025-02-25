import {
  TransferSourceParamsHdfs,
  TransferSourceParamsS3,
  TransferTargetParamsHdfs,
  TransferTargetParamsS3,
} from '@entities/transfer';

export type TransferParamsFileConnectionType =
  | TransferSourceParamsHdfs
  | TransferSourceParamsS3
  | TransferTargetParamsHdfs
  | TransferTargetParamsS3;

export type TransferTargetParamsFileConnectionType = TransferTargetParamsHdfs | TransferTargetParamsS3;
