import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { useSensitiveFields } from '../../hooks';

export const ConnectionAuthBasic = () => {
  const { t } = useTranslation('auth');
  const { isRequired } = useSensitiveFields();

  return (
    <>
      {/* Hide Form.Item control, because its value is set in 'useSelectConnectionType' hook */}
      <Form.Item name={['auth_data', 'type']} hidden/>
      <Form.Item label={t('username')} name={['auth_data', 'user']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label={t('password')} name={['auth_data', 'password']} rules={[{ required: isRequired }]}>
        <Input.Password size="large" />
      </Form.Item>
    </>
  );
};
