import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import { Select } from '@shared/ui';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';
import { ConnectionAuthBasic } from '../ConnectionAuthBasic';

import { CONNECTION_SAMBA_PROTOCOL_SELECT_OPTIONS } from './constants';

export const ConnectionSamba = () => {
  return (
    <>
      <Form.Item label="Host" name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Share" name={['connection_data', 'share']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Protocol" name={['connection_data', 'protocol']}>
        <Select
          size="large"
          options={CONNECTION_SAMBA_PROTOCOL_SELECT_OPTIONS}
          placeholder="Select connection protocol"
        />
      </Form.Item>
      <Form.Item label="Port" name={['connection_data', 'port']}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} />
      </Form.Item>
      <Form.Item label="Domain" name={['connection_data', 'domain']}>
        <Input size="large" />
      </Form.Item>
      <ConnectionAuthBasic />
    </>
  );
};
