import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { TABLE_NAME_PATTERN } from '@shared/constants';

import { TransferConnectionTableTypeProps } from './types';

export const TransferConnectionTableType = ({ name }: TransferConnectionTableTypeProps) => {
  const { t } = useTranslation('transfer');

  return (
    <Form.Item
      label={t('tableName')}
      name={[name, 'table_name']}
      rules={[{ type: 'string', required: true, pattern: TABLE_NAME_PATTERN, message: t('invalidTableName') }]}
    >
      <Input className="nodrag" size="large" placeholder="myschema.mytable" />
    </Form.Item>
  );
};
