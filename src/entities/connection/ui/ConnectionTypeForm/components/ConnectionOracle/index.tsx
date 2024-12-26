import React, { useCallback, useEffect, useState } from 'react';
import { Form, Input, InputNumber } from 'antd';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';
import { ConnectionAuthBasic } from '../ConnectionAuthBasic';

export const ConnectionOracle = () => {
  const form = Form.useFormInstance();

  const [isServiceNameDisabled, setServiceNameDisabled] = useState(false);
  const [isSidDisabled, setSidDisabled] = useState(false);

  const changeDisabledFields = useCallback(() => {
    const serviceName = form.getFieldValue('service_name');
    const sid = form.getFieldValue('sid');
    setServiceNameDisabled(!!sid);
    setSidDisabled(!!serviceName);
  }, [form]);

  const handleFieldChange = () => {
    changeDisabledFields();
    form.validateFields(['service_name', 'sid']);
  };

  //* It needs to validate required fields service_name and sid correctly if they have initial values
  useEffect(() => {
    changeDisabledFields();
  }, [changeDisabledFields]);

  return (
    <>
      <Form.Item label="Host" name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Port" name={['connection_data', 'port']} rules={[{ required: true }]}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} />
      </Form.Item>
      <Form.Item
        label="Service name"
        name={['connection_data', 'service_name']}
        rules={[
          {
            required: !isServiceNameDisabled,
            message: 'Either Service name or Sid is required',
          },
        ]}
      >
        <Input size="large" disabled={isServiceNameDisabled} onChange={handleFieldChange} />
      </Form.Item>
      <Form.Item
        label="Sid"
        name={['connection_data', 'sid']}
        rules={[
          {
            required: !isSidDisabled,
            message: 'Either Service name or Sid is required',
          },
        ]}
      >
        <Input size="large" disabled={isSidDisabled} onChange={handleFieldChange} />
      </Form.Item>
      <ConnectionAuthBasic />
    </>
  );
};
