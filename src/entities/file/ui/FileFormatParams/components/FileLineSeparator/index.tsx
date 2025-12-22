import { Form, Radio } from 'antd';
import { useTranslation } from 'react-i18next';
import { FileLineSeparator as FileLineSeparatorType } from '@entities/file/types';

import { FileLineSeparatorProps } from './types';

export const FileLineSeparator = <T,>({ name, options }: FileLineSeparatorProps<T>) => {
  const { t } = useTranslation('file');
  const fieldName = [...name, 'line_sep'];

  return (
    <Form.Item label={t('lineSeparator')} name={fieldName} initialValue={options[0].value}>
      <Radio.Group>
        {options.map((option) => (
          <Radio.Button key={option.value} value={option.value}>
            {t(`lineSeparators.${option.label as FileLineSeparatorType}`)}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};
