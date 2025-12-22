import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { FileCompression } from '../FileCompression';
import { FileLineSeparator } from '../FileLineSeparator';

import { JSON_COMPRESSION_SELECT_OPTIONS, JSON_SEPARATOR_SELECT_OPTIONS } from './constants';
import { FileFormatJsonProps } from './types';

export const FileFormatJson = ({ name }: FileFormatJsonProps) => {
  const { t } = useTranslation('file');

  return (
    <>
      <Form.Item label={t('encoding')} name={[...name, 'encoding']}>
        <Input className="nodrag" size="large" />
      </Form.Item>

      <FileLineSeparator name={name} options={JSON_SEPARATOR_SELECT_OPTIONS} />

      <FileCompression name={name} options={JSON_COMPRESSION_SELECT_OPTIONS} />
    </>
  );
};
