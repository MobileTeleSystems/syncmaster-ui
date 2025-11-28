import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { ConnectionAuthBasic } from '../ConnectionAuthBasic';

export const ConnectionHive = () => {
  const { t } = useTranslation('connection');

  return (
    <>
      <Form.Item label={t('cluster')} name={['connection_data', 'cluster']} rules={[{ required: true }]}>
        <Input size="large" placeholder="dwh" />
      </Form.Item>
      <ConnectionAuthBasic />
    </>
  );
};
