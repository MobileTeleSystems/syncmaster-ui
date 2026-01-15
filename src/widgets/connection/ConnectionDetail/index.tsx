import React from 'react';
import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { ConnectionDetailInfo } from '@features/connection';
import { UserRole } from '@shared/types';

import { ConnectionDetailProps } from './types';
import { DeleteConnectionButton, UpdateConnectionButton } from './components';
import * as classes from './styles.module.less';

export const ConnectionDetail = ({ connection, group }: ConnectionDetailProps) => {
  return (
    <PageContentWrapper>
      <ConnectionDetailInfo
        connection={connection}
        group={group.data}
        extra={
          <AccessWrapper accessRole={UserRole.MAINTAINER} currentRole={group.role}>
            <div className={classes.actions}>
              <UpdateConnectionButton connectionId={connection.id} />
              <DeleteConnectionButton connection={connection} />
            </div>
          </AccessWrapper>
        }
      />
    </PageContentWrapper>
  );
};
