import { PaginationRequest } from '@shared/types';

export interface Run {
  id: number;
  transfer_id: number;
  started_at: string | null;
  ended_at: string | null;
  status: keyof typeof RunStatus;
  log_url: string | null;
}

export enum RunStatus {
  CREATED = 'CREATED',
  STARTED = 'STARTED',
  FAILED = 'FAILED',
  SEND_STOP_SIGNAL = 'SEND STOP SIGNAL',
  STOPPED = 'STOPPED',
  FINISHED = 'FINISHED',
}

export interface GetRunsRequest extends PaginationRequest {
  transfer_id: number;
}

export interface GetRunRequest {
  id: number;
}
