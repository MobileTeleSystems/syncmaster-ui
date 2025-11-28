import React, { useState } from 'react';
import { Form, InputNumber, Radio, RadioChangeEvent } from 'antd';
import { useTranslation } from 'react-i18next';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';

export const ConnectionHttpProtocol = () => {
  const { t } = useTranslation('connection');

  const formInstance = Form.useFormInstance();
  Form.useWatch('protocol', formInstance);

  const [defaultPort, setDefaultPort] = useState('443');

  const handleProtocolChange = (e: RadioChangeEvent) => {
    if (e.target.value === 'https') {
      setDefaultPort('443');
    } else {
      setDefaultPort('80');
    }
  };

  return (
    <>
      <Form.Item
        label={t('protocol')}
        name={['connection_data', 'protocol']}
        rules={[{ required: true }]}
        initialValue="https"
      >
        <Radio.Group onChange={handleProtocolChange}>
          <Radio.Button value="http">HTTP</Radio.Button>
          <Radio.Button value="https">HTTPS</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={t('port')} name={['connection_data', 'port']}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} placeholder={defaultPort} />
      </Form.Item>
    </>
  );
};
