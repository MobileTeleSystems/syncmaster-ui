import React from 'react';
import { FormButtons, ManagedForm } from '@shared/ui';
import { authService, LoginResponse, useLogin } from '@entities/auth';
import { Form, Input, Typography } from 'antd';

import classes from './styles.module.less';

const { Title } = Typography;

export const Login = () => {
  const login = useLogin();

  const onSuccess = (response: LoginResponse) => {
    login(response.access_token);
  };

  return (
    <div className={classes.wrapper}>
      <Title>Sign in</Title>
      <ManagedForm mutationFunction={authService.login} onSuccess={onSuccess}>
        <Form.Item label="Username" name="username" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password size="large" />
        </Form.Item>

        <FormButtons isCancelButtonHidden />
      </ManagedForm>
    </div>
  );
};
