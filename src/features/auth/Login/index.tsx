import React from 'react';
import { ControlButtons, ManagedForm } from '@shared/ui';
import { authService, LoginResponse, useLogin } from '@entities/auth';
import { Form, Input, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import { Logo } from './assets';
import classes from './styles.module.less';

const { Title } = Typography;

export const Login = () => {
  const { t } = useTranslation('auth');
  const login = useLogin();

  const onSuccess = (response: LoginResponse) => {
    login(response.access_token);
  };

  return (
    <div className={classes.wrapper}>
      <Logo className={classes.logo} />
      <Title level={2}>{t('auth')}</Title>
      <ManagedForm mutationFunction={authService.login} onSuccess={onSuccess}>
        <Form.Item label={t('username')} name="username" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>

        <Form.Item label={t('password')} name="password" rules={[{ required: true }]}>
          <Input.Password size="large" />
        </Form.Item>

        <ControlButtons isCancelButtonHidden submitButtonText={t('signIn')} />
      </ManagedForm>
    </div>
  );
};
