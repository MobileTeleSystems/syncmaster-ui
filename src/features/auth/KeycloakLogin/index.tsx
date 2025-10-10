import React, { useEffect, useState } from 'react';
import { useCurrentUserInfo, useKeycloakLogin } from '@entities/auth';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import classes from './styles.module.less';

const { Title } = Typography;

export const KeycloakLogin = () => {
  const { t } = useTranslation('auth');
  const login = useKeycloakLogin();
  const [isEnabledRequest, setIsEnabledRequest] = useState(false);
  const { isSuccess, isEnabled, isFetching } = useCurrentUserInfo({ enabled: isEnabledRequest, throwOnError: false });

  useEffect(() => {
    if (isSuccess && isEnabled) {
      login();
    }
  }, [login, isSuccess, isEnabled]);

  const handleLogin = () => {
    setIsEnabledRequest(true);
  };

  return (
    <div className={classes.wrapper}>
      <Title>{t('auth')}</Title>
      <Button
        className={classes.button}
        type="primary"
        size="large"
        htmlType="submit"
        onClick={handleLogin}
        loading={isFetching}
      >
        {t('signIn')}
      </Button>
    </div>
  );
};
