import { QueueDetailInfo } from '@features/queue';
import React from 'react';
import { PageContentWrapper } from '@shared/ui';

import { QueueDetailProps } from './types';
import { DeleteQueueButton, UpdateQueueButton } from './components';
import classes from './styles.module.less';

export const QueueDetail = ({ queue, group }: QueueDetailProps) => {
  return (
    <PageContentWrapper>
      <QueueDetailInfo
        queue={queue}
        group={group}
        extra={
          <div className={classes.actions}>
            {/* //TODO: [DOP-20040] Need to rewrite groupUserRole prop to render action buttons when user role will be in response of groupService.getGroup */}
            <UpdateQueueButton queueId={queue.id} groupUserRole="Maintainer" />
            <DeleteQueueButton queue={queue} groupUserRole="Maintainer" />
          </div>
        }
      />
    </PageContentWrapper>
  );
};
