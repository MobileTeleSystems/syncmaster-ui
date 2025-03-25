import React, { memo } from 'react';
import { ManagedTable } from '@shared/ui';
import { hasAccessByUserRole } from '@shared/utils';
import { UserRole } from '@shared/types';
import { TransferQueryKey, transferService } from '@entities/transfer';
import { useTranslation } from 'react-i18next';

import { TransferListProps } from './types';
import { getTransferListColumns } from './utils';

export const TransferList = memo(({ group, onUpdateRowClick, onDeleteRowClick }: TransferListProps) => {
  const { t } = useTranslation('shared');

  return (
    <ManagedTable
      queryKey={[TransferQueryKey.GET_TRANSFERS, group.data.id]}
      queryFunction={(params) => transferService.getTransfers({ ...params, group_id: group.data.id })}
      columns={getTransferListColumns(t)}
      isHiddenRowActions={!hasAccessByUserRole(UserRole.DEVELOPER, group.role)}
      isRenderUpdateRowAction={() => hasAccessByUserRole(UserRole.DEVELOPER, group.role)}
      isRenderDeleteRowAction={() => hasAccessByUserRole(UserRole.MAINTAINER, group.role)}
      onUpdateRowClick={onUpdateRowClick}
      onDeleteRowClick={onDeleteRowClick}
      rowKey="id"
    />
  );
});
