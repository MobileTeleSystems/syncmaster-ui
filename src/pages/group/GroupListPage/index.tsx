import { GroupList } from '@features/group';
import { ActionButton, PageContentWrapper } from '@shared/ui';
import { Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import * as classes from './styles.module.less';

const { Title } = Typography;

export const GroupListPage = () => {
  const { t } = useTranslation('group');

  return (
    <PageContentWrapper width="large">
      <Title>{t('groups')}</Title>
      <PageContentWrapper width="large">
        <ActionButton className={classes.createButton} actionType="create" to="/groups/create" />
        <GroupList />
      </PageContentWrapper>
    </PageContentWrapper>
  );
};
