import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import { Select } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';
import { ConnectionAuthSamba } from '../ConnectionAuthSamba';

import { CONNECTION_SAMBA_PROTOCOL_SELECT_OPTIONS } from './constants';

export const ConnectionSamba = () => {
  const { t } = useTranslation('connection');

  return (
    <>
      <Form.Item label={t('host')} name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" placeholder="myserver.mycompany.com" />
      </Form.Item>
      <Form.Item label={t('protocol')} name={['connection_data', 'protocol']}>
        <Select size="large" options={CONNECTION_SAMBA_PROTOCOL_SELECT_OPTIONS} placeholder={t('selectProtocol')} />
      </Form.Item>
      <Form.Item label={t('port')} name={['connection_data', 'port']}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} placeholder="445" />
      </Form.Item>
      <Form.Item label={t('samba.share')} name={['connection_data', 'share']} rules={[{ required: true }]}>
        <Input size="large" placeholder="MYSHARE" />
      </Form.Item>
      <Form.Item label={t('samba.domain')} name={['connection_data', 'domain']}>
        <Input size="large" placeholder="mycompany.com" />
      </Form.Item>
      <ConnectionAuthSamba />
    </>
  );
};
