import React, { useState } from 'react';
import { ConnectionType } from '@shared/types';
import { Form, Select } from 'antd';
import { CONNECTION_TYPE_SELECT_OPTIONS } from '@entities/connection';

import { ConnectionHdfs, ConnectionHive, ConnectionOracle, ConnectionPostgres, ConnectionS3 } from './components';
import { ConnectionTypeFormProps } from './types';
import { SensitiveFieldsContext } from './constants';

export const ConnectionTypeForm = ({ initialType, isRequiredSensitiveFields = true }: ConnectionTypeFormProps) => {
  const [selectedConnectionType, setConnectionType] = useState<ConnectionType | undefined>(initialType);

  const handleSelectConnectionType = (type: ConnectionType) => {
    setConnectionType(type);
  };

  const renderForm = () => {
    switch (selectedConnectionType) {
      case ConnectionType.HDFS:
        return <ConnectionHdfs />;
      case ConnectionType.HIVE:
        return <ConnectionHive />;
      case ConnectionType.ORACLE:
        return <ConnectionOracle />;
      case ConnectionType.POSTGRES:
        return <ConnectionPostgres />;
      case ConnectionType.S3:
        return <ConnectionS3 />;
      default:
        return null;
    }
  };

  return (
    <>
      <Form.Item label="type" name="type" rules={[{ required: true }]}>
        <Select
          size="large"
          options={CONNECTION_TYPE_SELECT_OPTIONS}
          onSelect={handleSelectConnectionType}
          placeholder="Select connection type"
        />
      </Form.Item>
      <SensitiveFieldsContext.Provider value={{ isRequired: isRequiredSensitiveFields }}>
        {renderForm()}
      </SensitiveFieldsContext.Provider>
    </>
  );
};
