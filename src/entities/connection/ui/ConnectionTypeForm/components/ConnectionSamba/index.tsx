import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Radio, RadioChangeEvent } from 'antd';
import { useTranslation } from 'react-i18next';

import { MAX_ALLOWED_PORT, MIN_ALLOWED_PORT } from '../../constants';
import { useSensitiveFields } from '../../hooks';

export const ConnectionSamba = () => {
  const { t } = useTranslation('connection');
  const { isRequired } = useSensitiveFields();

  // Reset auth type after switching connection type in form
  const formInstance = Form.useFormInstance();
  Form.useWatch('protocol', formInstance);

  const [defaultPort, setDefaultPort] = useState('445');

  const handleProtocolChange = (e: RadioChangeEvent) => {
    if (e.target.value === 'SMB') {
      setDefaultPort('445');
    } else {
      setDefaultPort('139');
    }
  };

  useEffect(() => {
    formInstance.setFieldValue(['auth_data', 'type'], 'samba');
  }, [formInstance]);

  return (
    <>
      <Form.Item label={t('host')} name={['connection_data', 'host']} rules={[{ required: true }]}>
        <Input size="large" placeholder="myserver.mycompany.com" />
      </Form.Item>
      <Form.Item
        label={t('protocol')}
        name={['connection_data', 'protocol']}
        rules={[{ required: true }]}
        initialValue="SMB"
      >
        <Radio.Group onChange={handleProtocolChange}>
          <Radio.Button value="NetBIOS">NetBIOS</Radio.Button>
          <Radio.Button value="SMB">SMB</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={t('port')} name={['connection_data', 'port']}>
        <InputNumber size="large" min={MIN_ALLOWED_PORT} max={MAX_ALLOWED_PORT} placeholder={defaultPort} />
      </Form.Item>
      <Form.Item label={t('samba.share')} name={['connection_data', 'share']} rules={[{ required: true }]}>
        <Input size="large" placeholder="MYSHARE" />
      </Form.Item>
      <Form.Item label={t('samba.domain')} name={['connection_data', 'domain']}>
        <Input size="large" placeholder="mycompany.com" />
      </Form.Item>

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
