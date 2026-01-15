import React from 'react';
import { AccessWrapper, ActionButton, PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import { GroupWarningAlert, useSelectedGroup } from '@entities/group';
import { ConnectionListWrapper } from '@widgets/connection';
import { UserRole } from '@shared/types';
import { useTranslation } from 'react-i18next';

import * as classes from './styles.module.less';

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
          <ActionButton className={classes.createButton} actionType="create" to="/connections/create" />
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
