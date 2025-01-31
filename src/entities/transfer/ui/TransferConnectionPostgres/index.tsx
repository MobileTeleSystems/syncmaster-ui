import React from 'react';
import { Form, Input } from 'antd';

import { TransferConnectionPostgresProps } from './types';

export const TransferConnectionPostgres = ({ name }: TransferConnectionPostgresProps) => {
  return (
    <Form.Item label="Table name" name={[name, 'table_name']} rules={[{ required: true }]}>
      <Input className="nodrag" size="large" />
    </Form.Item>
  );
};
