import React from 'react';
import { Typography } from 'antd';
import { PageContentWrapper } from '@shared/ui';
import { useParams } from 'react-router-dom';
import { PageDetailParams, UserRole } from '@shared/types';
import { useGetGroup } from '@entities/group';
import { hasAccessByUserRole } from '@shared/utils';
import { AccessError } from '@shared/config';
import { useGetTransfer } from '@entities/transfer';
import { UpdateTransfer } from '@widgets/transfer';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

export const UpdateTransferPage = () => {
  const { t } = useTranslation('transfer');
  const params = useParams<PageDetailParams>();
  const { data: transfer } = useGetTransfer({ id: Number(params.id) });
  const { data: group } = useGetGroup({ id: transfer.group_id });

  if (!hasAccessByUserRole(UserRole.MAINTAINER, group.role)) {
    throw new AccessError();
  }

  return (
    <PageContentWrapper gap="large">
      <Title>{t('updateTransfer')}</Title>
      <UpdateTransfer transfer={transfer} group={group.data} />
    </PageContentWrapper>
  );
};
