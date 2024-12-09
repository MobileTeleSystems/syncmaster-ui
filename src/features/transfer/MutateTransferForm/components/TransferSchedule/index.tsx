import { Form, Input, Switch } from 'antd';
import React, { useState } from 'react';

export const TransferSchedule = () => {
  const formInstance = Form.useFormInstance();
  const [isScheduled, setScheduled] = useState(() => formInstance.getFieldValue('is_scheduled'));

  const handleChangeScheduled = (value: boolean) => {
    setScheduled(value);
  };

  return (
    <>
      <Form.Item label="Is scheduled" name="is_scheduled" valuePropName="checked">
        <Switch onChange={handleChangeScheduled} />
      </Form.Item>
      {isScheduled && (
        <Form.Item label="Schedule" name="schedule" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>
      )}
    </>
  );
};
