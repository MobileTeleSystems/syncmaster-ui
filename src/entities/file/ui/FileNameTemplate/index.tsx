import { Form, Input } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { FILE_NAME_TEMPLATE_PATTERN } from './constants';
import { FileNameTemplateTooltipText } from './components';

export const FileNameTemplate = () => {
  const { t } = useTranslation('file');

  return (
    <Form.Item
      label={t('filenameTemplate')}
      tooltip={<FileNameTemplateTooltipText />}
      name={['target_params', 'file_name_template']}
      rules={[
        {
          type: 'string',
          required: true,
          pattern: FILE_NAME_TEMPLATE_PATTERN,
          message: t('invalidFilenameTemplate'),
        },
      ]}
    >
      <Input className="nodrag" size="large" placeholder="{run_created_at}_{index}.{extension}" />
    </Form.Item>
  );
};
