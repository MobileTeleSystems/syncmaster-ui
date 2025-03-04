import { ConnectionType } from '@shared/types';
import { Form } from 'antd';
import { useState } from 'react';
import { ConnectionAuthType } from '@entities/connection';

import { UseSelectConnectionTypeProps } from './types';

/** Hook for handling connection type state in connection form */
export const useSelectConnectionType = ({ initialType }: UseSelectConnectionTypeProps) => {
  const formInstance = Form.useFormInstance();
  const [selectedConnectionType, setConnectionType] = useState<ConnectionType | undefined>(initialType);

  const getAuthDataTypeValue = (type: ConnectionType): ConnectionAuthType => {
    switch (type) {
      case ConnectionType.FTP:
      case ConnectionType.FTPS:
      case ConnectionType.SFTP:
      case ConnectionType.WEBDAV:
      case ConnectionType.CLICKHOUSE:
      case ConnectionType.HDFS:
      case ConnectionType.HIVE:
      case ConnectionType.MS_SQL:
      case ConnectionType.MY_SQL:
      case ConnectionType.ORACLE:
      case ConnectionType.POSTGRES:
        return ConnectionAuthType.BASIC;
      case ConnectionType.S3:
        return ConnectionAuthType.S3;
      case ConnectionType.SAMBA:
        return ConnectionAuthType.SAMBA;
    }
  };

  const handleSelectConnectionType = (type: ConnectionType) => {
    setConnectionType(type);
    formInstance.setFieldValue(['auth_data', 'type'], getAuthDataTypeValue(type));
  };

  return { selectedConnectionType, handleSelectConnectionType };
};
