import React from 'react';
import { Form, Input, Radio } from 'antd';
import { useTranslation } from 'react-i18next';

import { useSensitiveFields } from '../../hooks';

export const ConnectionAuthSamba = () => {
  const { t } = useTranslation('connection');
  const { isRequired } = useSensitiveFields();

  return (
    <>
      {/* Hide Form.Item control, because its value is set in 'useSelectConnectionType' hook */}
      <Form.Item name={['auth_data', 'type']} hidden />
      <Form.Item label={t('username', { ns: 'auth' })} name={['auth_data', 'user']} rules={[{ required: true }]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item
        label={t('password', { ns: 'auth' })}
        name={['auth_data', 'password']}
        rules={[{ required: isRequired }]}
      >
        <Input.Password size="large" />
      </Form.Item>
      <Form.Item label={t('samba.authType')} name={['auth_data', 'auth_type']} initialValue="NTLMv2">
        <Radio.Group>
          <Radio.Button value="NTLMv1">NTLMv1</Radio.Button>
          <Radio.Button value="NTLMv2">NTLMv2</Radio.Button>
        </Radio.Group>
      </Form.Item>
    </>
  );
};
