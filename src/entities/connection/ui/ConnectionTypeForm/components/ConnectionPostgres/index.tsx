import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';
import { ConnectionAuthBasic } from '../ConnectionAuthBasic';

export const ConnectionPostgres = () => {
  const { t } = useTranslation('connection');

  return (
    <>
      <Form.Item label={t('host')} name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" placeholder="11.22.33.44" />
      </Form.Item>
      <Form.Item label={t('port')} name={['connection_data', 'port']}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} placeholder="5432" />
      </Form.Item>
      <Form.Item label={t('databaseName')} name={['connection_data', 'database_name']} rules={[{ required: true }]}>
        <Input size="large" placeholder="postgres"  />
      </Form.Item>
      <ConnectionAuthBasic />
    </>
  );
};
