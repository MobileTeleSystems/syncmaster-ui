import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';
import { ConnectionAuthBasic } from '../ConnectionAuthBasic';

export const ConnectionOracle = () => {
  const { t } = useTranslation('connection');
  const form = Form.useFormInstance();

  Form.useWatch(['connection_data', 'service_name'], form);
  Form.useWatch(['connection_data', 'sid'], form);

  const serviceName = form.getFieldValue(['connection_data', 'service_name']);
  const sid = form.getFieldValue(['connection_data', 'sid']);

  const handleFieldChange = () => {
    form.validateFields([
      ['connection_data', 'service_name'],
      ['connection_data', 'sid'],
    ]);
  };

  return (
    <>
      <Form.Item label={t('host')} name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" placeholder="11.22.33.44" />
      </Form.Item>
      <Form.Item label={t('port')} name={['connection_data', 'port']}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} placeholder="1521" />
      </Form.Item>
      <Form.Item
        label={t('oracle.serviceName')}
        name={['connection_data', 'service_name']}
        rules={[
          {
            required: !sid,
            message: t('oracle.serviceNameOrSidRequired'),
          },
        ]}
      >
        <Input size="large" disabled={!!sid} onChange={handleFieldChange} placeholder="XEPDB1" />
      </Form.Item>
      <Form.Item
        label={t('oracle.sid')}
        name={['connection_data', 'sid']}
        rules={[
          {
            required: !serviceName,
            message: t('oracle.serviceNameOrSidRequired'),
          },
        ]}
      >
        <Input size="large" disabled={!!serviceName} onChange={handleFieldChange} />
      </Form.Item>
      <ConnectionAuthBasic />
    </>
  );
};
