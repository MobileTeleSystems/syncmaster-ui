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
      case ConnectionType.CLICKHOUSE:
      case ConnectionType.FTP:
      case ConnectionType.FTPS:
      case ConnectionType.HDFS:
      case ConnectionType.HIVE:
      case ConnectionType.MSSQL:
      case ConnectionType.MYSQL:
      case ConnectionType.ORACLE:
      case ConnectionType.POSTGRES:
      case ConnectionType.SFTP:
      case ConnectionType.WEBDAV:
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
