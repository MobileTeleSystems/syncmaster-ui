import React from 'react';
import { Form, Input } from 'antd';
import { Select } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { useSensitiveFields } from '../../hooks';

import { CONNECTION_SAMBA_AUTH_TYPE_SELECT_OPTIONS } from './constants';

export const ConnectionAuthSamba = () => {
  const { t } = useTranslation('connection');
  const { isRequired } = useSensitiveFields();

  return (
    <>
      {/* Hide Form.Item control, because its value is set in 'useSelectConnectionType' hook */}
      <Form.Item name={['auth_data', 'type']} hidden>
        <Input size="large" />
      </Form.Item>
      <Form.Item label={t('user', { ns: 'group' })} name={['auth_data', 'user']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item
        label={t('password', { ns: 'auth' })}
        name={['auth_data', 'password']}
        rules={[{ required: isRequired }]}
      >
        <Input.Password size="large" />
      </Form.Item>
      <Form.Item name={['auth_data', 'auth_type']}>
        <Select size="large" options={CONNECTION_SAMBA_AUTH_TYPE_SELECT_OPTIONS} placeholder={t('selectProtocol')} />
      </Form.Item>
    </>
  );
};
