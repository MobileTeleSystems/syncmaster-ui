import { AccessWrapper, ActionButton, PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import React from 'react';
import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { QueueListWrapper } from '@widgets/queue';
import { UserRole } from '@shared/types';
import { useTranslation } from 'react-i18next';

import classes from './styles.module.less';

const { Title } = Typography;

export const QueueListPage = () => {
  const { t } = useTranslation('queue');
  const { group } = useSelectedGroup();

  const renderContent = () => {
    if (!group?.data.id) {
      return <GroupWarningAlert description={t('needToSelectGroupToSeeQueueList')} />;
    }

    return (
      <PageContentWrapper width="large">
        <AccessWrapper accessRole={UserRole.MAINTAINER} currentRole={group.role}>
          <ActionButton className={classes.createButton} actionType="create" to="/queues/create" />
        </AccessWrapper>
        <QueueListWrapper group={group} />
      </PageContentWrapper>
    );
  };

  return (
    <PageContentWrapper width="large">
      <Title>{t('queues')}</Title>
      {renderContent()}
    </PageContentWrapper>
  );
};
