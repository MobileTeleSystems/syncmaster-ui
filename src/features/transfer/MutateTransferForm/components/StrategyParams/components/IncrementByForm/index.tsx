import React from 'react';
import { ConnectionType } from '@shared/types';
import { Form, Input } from 'antd';
import { Select } from '@shared/ui';

import { IncrementByFormProps } from './types';
import { STRATEGY_PARAMS_INCREMENT_BY_SELECT_OPTIONS } from './constants';

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
    case ConnectionType.FTP:
    case ConnectionType.FTPS:
    case ConnectionType.SFTP:
    case ConnectionType.WEBDAV:
    case ConnectionType.SAMBA:
      return (
        <Form.Item label="Increment by" name={['strategy_params', 'increment_by']} rules={[{ required: true }]}>
          <Select
            size="large"
            options={STRATEGY_PARAMS_INCREMENT_BY_SELECT_OPTIONS}
            placeholder="Select increment by"
          />
        </Form.Item>
      );
    case ConnectionType.HDFS:
    case ConnectionType.S3:
      return null;
  }
};
