import React from 'react';
import { AccessWrapper, PageContentWrapper } from '@shared/ui';
import { Button, Typography } from 'antd';
import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { ConnectionListWrapper } from '@widgets/connection';
import { UserRole } from '@shared/types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classes from './styles.module.less';

const { Title } = Typography;

export const ConnectionListPage = () => {
  const { t } = useTranslation('connection');
  const { group } = useSelectedGroup();

  const renderContent = () => {
    if (!group?.data.id) {
      return <GroupWarningAlert description={t('needToSelectGroupToSeeConnectionList')} />;
    }

    return (
      <PageContentWrapper width="large">
        <AccessWrapper accessRole={UserRole.MAINTAINER} currentRole={group.role}>
          <Button className={classes.createButton} type="primary" size="large">
            <Link to="/connections/create">{t('createConnection')}</Link>
          </Button>
        </AccessWrapper>
        <ConnectionListWrapper group={group} />
      </PageContentWrapper>
    );
  };

  return (
    <PageContentWrapper width="large">
      <Title>{t('connections')}</Title>
      {renderContent()}
    </PageContentWrapper>
  );
};
