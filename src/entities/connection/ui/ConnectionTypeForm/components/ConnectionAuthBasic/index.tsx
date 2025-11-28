import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { useSensitiveFields } from '../../hooks';

export const ConnectionAuthBasic = () => {
  const { t } = useTranslation('auth');
  const { isRequired } = useSensitiveFields();

  // Reset auth type after switching connection type in form
  const formInstance = Form.useFormInstance();
  useEffect(() => {
    formInstance.setFieldValue(['auth_data', 'type'], 'basic');
  }, [formInstance]);

  return (
    <>
      <Form.Item name={['auth_data', 'type']} hidden />
      <Form.Item label={t('username')} name={['auth_data', 'user']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label={t('password')} name={['auth_data', 'password']} rules={[{ required: isRequired }]}>
        <Input.Password size="large" />
      </Form.Item>
    </>
  );
};
