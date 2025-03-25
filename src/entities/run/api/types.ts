import { PaginationRequest } from '@shared/types';

import { RunStatus } from './constants';

export interface Run {
  id: number;
  transfer_id: number;
  started_at: string | null;
  ended_at: string | null;
  status: RunStatus;
  log_url: string | null;
}

export interface GetRunsRequest extends PaginationRequest {
  transfer_id: number;
}

export interface GetRunRequest {
  id: number;
}

export interface CreateRunRequest {
  transfer_id: number;
}
