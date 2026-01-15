import React, { useLayoutEffect, useState } from 'react';
import { Select } from '@shared/ui';
import { Form } from 'antd';
import { ConnectionType } from '@shared/types';
import { useTranslation } from 'react-i18next';

import { StrategyTypeFormProps } from './types';
import { useGetStrategyParamsSelectOptions } from './hooks';

export const StrategyTypeForm = ({ sourceConnectionType }: StrategyTypeFormProps) => {
  const { t } = useTranslation('transfer');
  const strategyParamsSelectOptions = useGetStrategyParamsSelectOptions();

  const [isDisabled, setDisabled] = useState(false);
  const formInstance = Form.useFormInstance();

  // change strategy_params type value and disabled field state depending on source connection type
  useLayoutEffect(() => {
    switch (sourceConnectionType) {
      case ConnectionType.HDFS:
      case ConnectionType.S3:
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDisabled(true);
        return formInstance.setFieldValue(['strategy_params', 'type'], 'full');
      case ConnectionType.CLICKHOUSE:
      case ConnectionType.FTP:
      case ConnectionType.FTPS:
      case ConnectionType.HIVE:
      case ConnectionType.MSSQL:
      case ConnectionType.MYSQL:
      case ConnectionType.ORACLE:
      case ConnectionType.POSTGRES:
      case ConnectionType.SAMBA:
      case ConnectionType.SFTP:
      case ConnectionType.WEBDAV:
        return setDisabled(false);
    }
  }, [formInstance, sourceConnectionType]);

  return (
    <Form.Item
      label={t('strategyParams')}
      name={['strategy_params', 'type']}
      rules={[{ required: true }]}
      initialValue="full"
    >
      <Select
        size="large"
        options={strategyParamsSelectOptions}
        placeholder={t('selectStrategy')}
        disabled={isDisabled}
      />
    </Form.Item>
  );
};
