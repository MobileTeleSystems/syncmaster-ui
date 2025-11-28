import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import { Select } from '@shared/ui';
import { CONNECTION_PROTOCOL_SELECT_OPTIONS } from '@entities/connection';
import { useTranslation } from 'react-i18next';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';
import { ConnectionAuthBasic } from '../ConnectionAuthBasic';

export const ConnectionWebdav = () => {
  const { t } = useTranslation('connection');

  return (
    <>
      <Form.Item label={t('host')} name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" placeholder="myserver.mycompany.com" />
      </Form.Item>
      <Form.Item label={t('protocol')} name={['connection_data', 'protocol']}>
        <Select size="large" options={CONNECTION_PROTOCOL_SELECT_OPTIONS} placeholder={t('selectProtocol')} />
      </Form.Item>
      <Form.Item label={t('port')} name={['connection_data', 'port']}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} placeholder="443" />
      </Form.Item>
      <ConnectionAuthBasic />
    </>
  );
};
