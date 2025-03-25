import React from 'react';
import { ConnectionType } from '@shared/types';
import { Form, Input } from 'antd';
import { Select } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { IncrementByFormProps } from './types';
import { useGetIncrementBySelectOptions } from './hooks';

export const IncrementByForm = ({ sourceConnectionType }: IncrementByFormProps) => {
  const { t } = useTranslation('transfer');
  const incrementBySelectOptions = useGetIncrementBySelectOptions();

  switch (sourceConnectionType) {
    case ConnectionType.CLICKHOUSE:
    case ConnectionType.HIVE:
    case ConnectionType.MS_SQL:
    case ConnectionType.MY_SQL:
    case ConnectionType.ORACLE:
    case ConnectionType.POSTGRES:
      return (
        <Form.Item label={t('incrementBy')} name={['strategy_params', 'increment_by']} rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>
      );
    case ConnectionType.FTP:
    case ConnectionType.FTPS:
    case ConnectionType.SFTP:
    case ConnectionType.WEBDAV:
    case ConnectionType.SAMBA:
      return (
        <Form.Item label={t('incrementBy')} name={['strategy_params', 'increment_by']} rules={[{ required: true }]}>
          <Select size="large" options={incrementBySelectOptions} placeholder={t('selectIncrementBy')} />
        </Form.Item>
      );
    case ConnectionType.HDFS:
    case ConnectionType.S3:
      return null;
  }
};
