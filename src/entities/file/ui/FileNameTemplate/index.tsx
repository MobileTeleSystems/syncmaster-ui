import { Form, Input } from 'antd';
import React from 'react';
import { validateFormFieldByPattern } from '@shared/utils';
import { useTranslation } from 'react-i18next';

import { FILE_NAME_TEMPLATE_REGEXP, fileNamePlaceholder } from './constants';
import { FileNameTemplateTooltipText } from './components';

export const FileNameTemplate = () => {
  const { t } = useTranslation('error');

  return (
    <Form.Item
      label={t('filenameTemplate', { ns: 'file' })}
      normalize={(value) => (value.trim() === '' ? undefined : value)}
      tooltip={<FileNameTemplateTooltipText />}
      name={['target_params', 'file_name_template']}
      rules={[
        {
          pattern: FILE_NAME_TEMPLATE_REGEXP,
          validator: (rule, value) => validateFormFieldByPattern(rule, value, t),
        },
      ]}
    >
      <Input className="nodrag" size="large" placeholder={fileNamePlaceholder} />
    </Form.Item>
  );
};
