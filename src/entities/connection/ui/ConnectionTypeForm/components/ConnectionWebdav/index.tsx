import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { ConnectionAuthBasic } from '../ConnectionAuthBasic';
import { ConnectionHttpProtocol } from '../ConnectionHttpProtocol';

export const ConnectionWebdav = () => {
  const { t } = useTranslation('connection');

  return (
    <>
      <Form.Item label={t('host')} name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" placeholder="myserver.mycompany.com" />
      </Form.Item>
      <ConnectionHttpProtocol/>
      <ConnectionAuthBasic />
    </>
  );
};
