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
          <div className={classes.actions}>
            <AccessWrapper accessRole={UserRole.DEVELOPER} currentRole={group.role}>
              <UpdateConnectionButton connectionId={connection.id} />
            </AccessWrapper>
            <AccessWrapper accessRole={UserRole.MAINTAINER} currentRole={group.role}>
              <DeleteConnectionButton connection={connection} />
            </AccessWrapper>
          </div>
        }
      />
    </PageContentWrapper>
  );
};
