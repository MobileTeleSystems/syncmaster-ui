import React, { memo } from 'react';
import { ManagedTable } from '@shared/ui';
import { hasAccessByUserRole } from '@shared/utils';
import { UserRole } from '@shared/types';
import { TransferQueryKey, transferService } from '@entities/transfer';

import { TRANSFER_LIST_COLUMNS } from './constants';
import { TransferListProps } from './types';

export const TransferList = memo(({ group, onUpdateRowClick, onDeleteRowClick }: TransferListProps) => {
  return (
    <ManagedTable
      queryKey={[TransferQueryKey.GET_TRANSFERS, group.data.id]}
      queryFunction={(params) => transferService.getTransfers({ ...params, group_id: group.data.id })}
      columns={TRANSFER_LIST_COLUMNS}
      isHiddenRowActions={!hasAccessByUserRole(UserRole.Developer, group.role)}
      isRenderUpdateRowAction={() => hasAccessByUserRole(UserRole.Developer, group.role)}
      isRenderDeleteRowAction={() => hasAccessByUserRole(UserRole.Maintainer, group.role)}
      onUpdateRowClick={onUpdateRowClick}
      onDeleteRowClick={onDeleteRowClick}
      rowKey="id"
    />
  );
});
