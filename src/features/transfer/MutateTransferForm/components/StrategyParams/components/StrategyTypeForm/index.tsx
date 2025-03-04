import React, { useLayoutEffect, useState } from 'react';
import { Select } from '@shared/ui';
import { Form } from 'antd';
import { ConnectionType } from '@shared/types';

import { TRANSFER_STRATEGY_PARAMS_SELECT_OPTIONS } from './constants';
import { StrategyTypeFormProps } from './types';

export const StrategyTypeForm = ({ sourceConnectionType }: StrategyTypeFormProps) => {
  const [isDisabled, setDisabled] = useState(false);
  const formInstance = Form.useFormInstance();

  // change strategy_params type value and disabled field state depending on source connection type
  useLayoutEffect(() => {
    switch (sourceConnectionType) {
      case ConnectionType.HDFS:
      case ConnectionType.S3:
        setDisabled(true);
        return formInstance.setFieldValue(['strategy_params', 'type'], 'full');
      case ConnectionType.FTP:
      case ConnectionType.FTPS:
      case ConnectionType.SFTP:
      case ConnectionType.WEBDAV:
      case ConnectionType.SAMBA:
      case ConnectionType.CLICKHOUSE:
      case ConnectionType.HIVE:
      case ConnectionType.MS_SQL:
      case ConnectionType.MY_SQL:
      case ConnectionType.ORACLE:
      case ConnectionType.POSTGRES:
        return setDisabled(false);
    }
  }, [formInstance, sourceConnectionType]);

  return (
    <Form.Item label="Strategy params" name={['strategy_params', 'type']} rules={[{ required: true }]}>
      <Select
        size="large"
        options={TRANSFER_STRATEGY_PARAMS_SELECT_OPTIONS}
        placeholder="Select strategy"
        disabled={isDisabled}
      />
    </Form.Item>
  );
};
