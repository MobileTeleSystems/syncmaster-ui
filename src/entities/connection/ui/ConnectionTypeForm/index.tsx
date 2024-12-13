import React, { useState } from 'react';
import { ConnectionType } from '@shared/types';
import { Form, Select } from 'antd';
import { CONNECTION_TYPE_SELECT_OPTIONS } from '@entities/connection';

import { ConnectionTypeFormProps } from './types';
import { CONNECTION_TYPE_COMPONENT, SensitiveFieldsContext } from './constants';

export const ConnectionTypeForm = ({ initialType, isRequiredSensitiveFields = true }: ConnectionTypeFormProps) => {
  const [selectedConnectionType, setConnectionType] = useState<ConnectionType | undefined>(initialType);

  const handleSelectConnectionType = (type: ConnectionType) => {
    setConnectionType(type);
  };

  return (
    <>
      <Form.Item label="Type" name="type" rules={[{ required: true }]}>
        <Select
          size="large"
          options={CONNECTION_TYPE_SELECT_OPTIONS}
          onSelect={handleSelectConnectionType}
          placeholder="Select connection type"
        />
      </Form.Item>
      <SensitiveFieldsContext.Provider value={{ isRequired: isRequiredSensitiveFields }}>
        {CONNECTION_TYPE_COMPONENT[selectedConnectionType!]}
      </SensitiveFieldsContext.Provider>
    </>
  );
};
