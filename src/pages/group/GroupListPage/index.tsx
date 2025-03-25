import { GroupList } from '@features/group';
import { PageContentWrapper } from '@shared/ui';
import { Button, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import classes from './styles.module.less';

const { Title } = Typography;

export const GroupListPage = () => {
  const { t } = useTranslation('group');

  return (
    <PageContentWrapper width="large">
      <Title>{t('groups')}</Title>
      <PageContentWrapper width="large">
        <Button className={classes.createButton} type="primary" size="large">
          <Link to="/groups/create">{t('createGroup')}</Link>
        </Button>
        <GroupList />
      </PageContentWrapper>
    </PageContentWrapper>
  );
};
