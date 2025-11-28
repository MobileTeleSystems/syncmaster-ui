import React from 'react';
import { Form, Input, InputNumber, Radio } from 'antd';
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
      <Form.Item
        label={t('protocol')}
        name={['connection_data', 'protocol']}
        rules={[{ required: true }]}
        initialValue="https"
      >
        <Radio.Group>
          <Radio.Button value="http">HTTP</Radio.Button>
          <Radio.Button value="httpS">HTTPS</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={t('port')} name={['connection_data', 'port']}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} placeholder="443" />
      </Form.Item>
      <ConnectionAuthBasic />
    </>
  );
};
