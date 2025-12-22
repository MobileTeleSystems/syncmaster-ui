import { Form, Radio } from 'antd';
import { useTranslation } from 'react-i18next';
import { FileCompression as FileCompressionType } from '@entities/file/types';

import { FileCompressionProps } from './types';

export const FileCompression = <T,>({ name, options }: FileCompressionProps<T>) => {
  const { t } = useTranslation('file');
  const fieldName = [...name, 'compression'];

  return (
    <Form.Item label={t('compression')} name={fieldName} initialValue="none">
      <Radio.Group>
        <Radio.Button value="none">{t('no', { ns: 'shared' })}</Radio.Button>
        {options.map((option) => (
          <Radio.Button key={option.value} value={option.value}>
            {t(`compressions.${option.label as FileCompressionType}`)}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};
