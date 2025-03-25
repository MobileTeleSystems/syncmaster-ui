import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { TransferConnectionTableTypeProps } from './types';

export const TransferConnectionTableType = ({ name }: TransferConnectionTableTypeProps) => {
  const { t } = useTranslation('transfer');

  return (
    <Form.Item label={t('tableName')} name={[name, 'table_name']} rules={[{ required: true }]}>
      <Input className="nodrag" size="large" />
    </Form.Item>
  );
};
