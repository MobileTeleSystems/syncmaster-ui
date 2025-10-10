import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { SpinOverlay } from '@shared/ui';

import { useLogoutButton } from './hooks';

export const LogoutButton = () => {
  const { t } = useTranslation('auth');
  const { handleClick, isPending } = useLogoutButton();

  return (
    <>
      {isPending && <SpinOverlay />}
      <Button size="middle" icon={<LogoutOutlined />} onClick={handleClick} title={t('logout')} />
    </>
  );
};
