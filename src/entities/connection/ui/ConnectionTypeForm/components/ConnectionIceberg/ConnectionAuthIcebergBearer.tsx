import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { useSensitiveFields } from '../../hooks';

export const ConnectionAuthIcebergBearer = () => {
  const { t } = useTranslation('connection');
  const { isRequired } = useSensitiveFields();

  return (
    <>
      <Form.Item
        label={t('iceberg.token')}
        name={['auth_data', 'rest_catalog_token']}
        rules={[{ required: isRequired }]}
      >
        <Input.Password size="large" />
      </Form.Item>
    </>
  );
};
