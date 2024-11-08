import React from 'react';
import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { UserRole } from '@shared/types';
import { RunList } from '@features/run';

import { TransferRunsProps } from './types';
import { CreateRunButton } from './components';
import classes from './styles.module.less';

const { Text } = Typography;

export const TransferRuns = ({ group, transferId, transferName }: TransferRunsProps) => {
  return (
    <PageContentWrapper>
      <div className={classes.header}>
        <Text className={classes.subtitle} strong>
          Transfer runs
        </Text>
        <AccessWrapper accessRole={UserRole.Developer} currentRole={group.role}>
          <CreateRunButton transferId={transferId} transferName={transferName} />
        </AccessWrapper>
      </div>
      <RunList transferId={transferId} />
    </PageContentWrapper>
  );
};
