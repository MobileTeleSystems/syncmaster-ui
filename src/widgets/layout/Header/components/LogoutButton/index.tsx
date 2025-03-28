import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { useLogout } from '@entities/auth';
import { useSelectedGroup } from '@entities/group';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

export const LogoutButton = () => {
  const { t } = useTranslation('auth');
  const logout = useLogout();
  const { cleanGroup } = useSelectedGroup();

  const handleClickLogout = () => {
    cleanGroup();
    logout();
  };

  return <Button size="middle" icon={<LogoutOutlined />} onClick={handleClickLogout} title={t('logout')} />;
};
