import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { Button, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
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
          <Button className={classes.createButton} type="primary" size="large">
            <Link to="/queues/create">{t('createQueue')}</Link>
          </Button>
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
