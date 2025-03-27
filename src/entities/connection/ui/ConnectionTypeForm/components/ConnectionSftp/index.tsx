import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';
import { ConnectionAuthBasic } from '../ConnectionAuthBasic';

export const ConnectionFtps = () => {
  const { t } = useTranslation('connection');

  return (
    <>
      <Form.Item label={t('host')} name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label={t('port')} name={['connection_data', 'port']} rules={[{ required: true }]}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} />
      </Form.Item>
      <ConnectionAuthBasic />
    </>
  );
};
