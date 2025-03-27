import { QueueDetailInfo } from '@features/queue';
import React from 'react';
import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { UserRole } from '@shared/types';

import { QueueDetailProps } from './types';
import { DeleteQueueButton, UpdateQueueButton } from './components';
import classes from './styles.module.less';

export const QueueDetail = ({ queue, group }: QueueDetailProps) => {
  return (
    <PageContentWrapper>
      <QueueDetailInfo
        queue={queue}
        group={group.data}
        extra={
          <AccessWrapper accessRole={UserRole.MAINTAINER} currentRole={group.role}>
            <div className={classes.actions}>
              <UpdateQueueButton queueId={queue.id} />
              <DeleteQueueButton queue={queue} />
            </div>
          </AccessWrapper>
        }
      />
    </PageContentWrapper>
  );
};
