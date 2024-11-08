import React from 'react';
import { ManagedTable } from '@shared/ui';
import { PaginationRequest } from '@shared/types';
import { RunQueryKey, runService } from '@entities/run';

import { RUN_LIST_COLUMNS } from './constants';
import { RunListProps } from './types';

export const RunList = ({ transferId }: RunListProps) => {
  const handleGetRuns = (params: PaginationRequest) => {
    return runService.getRuns({ ...params, transfer_id: transferId });
  };

  return (
    <ManagedTable
      queryKey={[RunQueryKey.GET_RUNS, transferId]}
      queryFunction={handleGetRuns}
      columns={RUN_LIST_COLUMNS}
      isHiddenRowActions
      rowKey="id"
    />
  );
};
