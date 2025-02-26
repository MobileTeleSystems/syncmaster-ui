import React from 'react';
import { ConnectionType } from '@shared/types';
import { Form, Input } from 'antd';

import { IncrementByFormProps } from './types';

export const IncrementByForm = ({ sourceConnectionType }: IncrementByFormProps) => {
  switch (sourceConnectionType) {
    case ConnectionType.CLICKHOUSE:
    case ConnectionType.HIVE:
    case ConnectionType.MS_SQL:
    case ConnectionType.MY_SQL:
    case ConnectionType.ORACLE:
    case ConnectionType.POSTGRES:
      return (
        <Form.Item label="Increment by" name={['strategy_params', 'increment_by']} rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>
      );
    case ConnectionType.HDFS:
    case ConnectionType.S3:
      return null;
  }
};
