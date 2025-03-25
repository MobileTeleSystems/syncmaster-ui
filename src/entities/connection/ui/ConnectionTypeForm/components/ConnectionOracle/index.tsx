import React, { useCallback, useEffect, useState } from 'react';
import { Form, Input, InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';
import { ConnectionAuthBasic } from '../ConnectionAuthBasic';

export const ConnectionOracle = () => {
  const { t } = useTranslation('connection');
  const form = Form.useFormInstance();

  const [isServiceNameDisabled, setServiceNameDisabled] = useState(false);
  const [isSidDisabled, setSidDisabled] = useState(false);

  const changeDisabledFields = useCallback(() => {
    const serviceName = form.getFieldValue(['connection_data', 'service_name']);
    const sid = form.getFieldValue(['connection_data', 'sid']);
    setServiceNameDisabled(!!sid);
    setSidDisabled(!!serviceName);
  }, [form]);

  const handleFieldChange = () => {
    changeDisabledFields();
    form.validateFields([
      ['connection_data', 'service_name'],
      ['connection_data', 'sid'],
    ]);
  };

  //* It needs to validate required fields service_name and sid correctly if they have initial values
  useEffect(() => {
    changeDisabledFields();
  }, [changeDisabledFields]);

  return (
    <>
      <Form.Item label={t('host')} name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item label={t('port')} name={['connection_data', 'port']} rules={[{ required: true }]}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} />
      </Form.Item>
      <Form.Item
        label={t('serviceName')}
        name={['connection_data', 'service_name']}
        rules={[
          {
            required: !isServiceNameDisabled,
            message: t('serviceNameOrSidRequired'),
          },
        ]}
      >
        <Input size="large" disabled={isServiceNameDisabled} onChange={handleFieldChange} />
      </Form.Item>
      <Form.Item
        label={t('sid')}
        name={['connection_data', 'sid']}
        rules={[
          {
            required: !isSidDisabled,
            message: t('serviceNameOrSidRequired'),
          },
        ]}
      >
        <Input size="large" disabled={isSidDisabled} onChange={handleFieldChange} />
      </Form.Item>
      <ConnectionAuthBasic />
    </>
  );
};
