import { Form, Input } from 'antd';
import React from 'react';
import { validateFormFieldByPattern } from '@shared/utils';

import { FILE_NAME_TEMPLATE_REGEXP, fileNamePlaceholder } from './constants';
import { FileNameTemplateTooltipText } from './components';

export const FileNameTemplate = () => {
  return (
    <Form.Item
      label="Filename template"
      normalize={(value) => (value.trim() === '' ? undefined : value)}
      tooltip={<FileNameTemplateTooltipText />}
      name={['target_params', 'file_name_template']}
      rules={[
        {
          pattern: FILE_NAME_TEMPLATE_REGEXP,
          validator: validateFormFieldByPattern,
        },
      ]}
    >
      <Input className="nodrag" size="large" placeholder={fileNamePlaceholder} />
    </Form.Item>
  );
};
