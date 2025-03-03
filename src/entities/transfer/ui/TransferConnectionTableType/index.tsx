import React from 'react';
import { Form, Input } from 'antd';

import { TransferConnectionTableTypeProps } from './types';

export const TransferConnectionTableType = ({ name }: TransferConnectionTableTypeProps) => {
  return (
    <Form.Item label="Table name" name={[name, 'table_name']} rules={[{ required: true }]}>
      <Input className="nodrag" size="large" />
    </Form.Item>
  );
};
