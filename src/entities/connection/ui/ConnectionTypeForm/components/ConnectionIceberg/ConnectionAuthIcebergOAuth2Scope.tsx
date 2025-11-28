import React, { ChangeEvent, useMemo, useState } from 'react';
import { Form, FormListFieldData, FormListOperation, Input, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

export const ConnectionAuthIcebergOAuth2Scope = ({
  field,
  remove,
}: {
  field: FormListFieldData;
  remove: FormListOperation['remove'];
}) => {
  const formInstance = Form.useFormInstance();

  /** Use custom type state, because Form.useWatch doesn't support dynamic fieldname like in Form.List */
  const initialValue = useMemo(() => {
    return formInstance.getFieldValue(['auth_data', 'rest_catalog_oauth2_scopes', field.name]);
  }, [formInstance, field]);

  const [value, setValue] = useState(() => initialValue);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Form.Item {...field} noStyle>
      <Space>
        <Input size="large" value={value} onChange={handleValueChange} />
        <CloseOutlined onClick={() => remove(field.name)} />
      </Space>
    </Form.Item>
  );
};
