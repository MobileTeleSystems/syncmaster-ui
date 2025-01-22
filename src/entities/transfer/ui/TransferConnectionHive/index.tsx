import React from 'react';
import { Form, Input } from 'antd';

import { TransferConnectionHiveProps } from './types';

export const TransferConnectionHive = ({ name }: TransferConnectionHiveProps) => {
  return (
    <Form.Item label="Table name" name={[name, 'table_name']} rules={[{ required: true }]}>
      <Input size="large" />
    </Form.Item>
  );
};
