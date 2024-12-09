import React from 'react';
import { Form, Input } from 'antd';

import { TransferConnectionPostgresProps } from './types';

export const TransferConnectionPostgres = ({ name }: TransferConnectionPostgresProps) => {
  return (
    <Form.Item label="Table name" name={[name, 'table_name']} rules={[{ required: true }]}>
      <Input size="large" />
    </Form.Item>
  );
};
