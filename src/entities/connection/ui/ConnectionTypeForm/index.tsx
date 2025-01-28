import React from 'react';
import { Form } from 'antd';
import { CONNECTION_TYPE_SELECT_OPTIONS } from '@entities/connection';
import { Fieldset } from '@shared/ui';
import { Select } from '@shared/ui';

import { ConnectionTypeFormProps } from './types';
import { CONNECTION_TYPE_COMPONENT, SensitiveFieldsContext } from './constants';
import { useSelectConnectionType } from './hooks';

export const ConnectionTypeForm = ({ initialType, isRequiredSensitiveFields = true }: ConnectionTypeFormProps) => {
  const { selectedConnectionType, handleSelectConnectionType } = useSelectConnectionType({ initialType });

  return (
    <Fieldset title="Connection settings">
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
    </Fieldset>
  );
};
