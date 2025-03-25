import React from 'react';
import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { UserRole } from '@shared/types';
import { RunList } from '@features/run';
import { useTranslation } from 'react-i18next';

import { TransferRunsProps } from './types';
import { CreateRunButton } from './components';
import classes from './styles.module.less';

const { Text } = Typography;

export const TransferRuns = ({ group, transferId, transferName }: TransferRunsProps) => {
  const { t } = useTranslation('run');

  return (
    <PageContentWrapper>
      <div className={classes.header}>
        <Text className={classes.subtitle} strong>
          {t('transferRuns')}
        </Text>
        <AccessWrapper accessRole={UserRole.DEVELOPER} currentRole={group.role}>
          <CreateRunButton transferId={transferId} transferName={transferName} />
        </AccessWrapper>
      </div>
      <RunList transferId={transferId} />
    </PageContentWrapper>
  );
};
