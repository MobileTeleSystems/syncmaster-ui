import React, { useCallback, useEffect, useState } from 'react';
import { Form, Input, InputNumber } from 'antd';

import { useSensitiveFields } from '../../hooks';
import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';

export const ConnectionOracle = () => {
  const { isRequired } = useSensitiveFields();
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
      <Form.Item label="Host" name="host" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Port" name="port" rules={[{ required: true }]}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} />
      </Form.Item>
      <Form.Item
        label="Service name"
        name="service_name"
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
        name="sid"
        rules={[
          {
            required: !isSidDisabled,
            message: 'Either Service name or Sid is required',
          },
        ]}
      >
        <Input size="large" disabled={isSidDisabled} onChange={handleFieldChange} />
      </Form.Item>
      <Form.Item label="User" name="user" rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: isRequired }]}>
        <Input.Password size="large" />
      </Form.Item>
    </>
  );
};
