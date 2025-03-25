import React from 'react';
import { ManagedTable } from '@shared/ui';
import { PaginationRequest } from '@shared/types';
import { RunQueryKey, runService } from '@entities/run';
import { useTranslation } from 'react-i18next';

import { RunListProps } from './types';
import { getRunListColumns } from './utils';

export const RunList = ({ transferId }: RunListProps) => {
  const { t } = useTranslation('run');

  const handleGetRuns = (params: PaginationRequest) => {
    return runService.getRuns({ ...params, transfer_id: transferId });
  };

  return (
    <ManagedTable
      queryKey={[RunQueryKey.GET_RUNS, transferId]}
      queryFunction={handleGetRuns}
      columns={getRunListColumns(t)}
      isHiddenRowActions
      rowKey="id"
    />
  );
};
