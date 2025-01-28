import React from 'react';
import { Form, Input } from 'antd';

import { TransferConnectionOracleProps } from './types';

export const TransferConnectionOracle = ({ name }: TransferConnectionOracleProps) => {
  return (
    <Form.Item label="Table name" name={[name, 'table_name']} rules={[{ required: true }]}>
      <Input className="nodrag" size="large" />
    </Form.Item>
  );
};
