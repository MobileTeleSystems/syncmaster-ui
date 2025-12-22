import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { FileCompression } from '../FileCompression';
import { FileLineSeparator } from '../FileLineSeparator';

import { JSON_LINE_COMPRESSION_SELECT_OPTIONS, JSON_LINE_SEPARATOR_SELECT_OPTIONS } from './constants';
import { FileFormatJsonLineProps } from './types';

export const FileFormatJsonLine = ({ name }: FileFormatJsonLineProps) => {
  const { t } = useTranslation('file');

  return (
    <>
      <Form.Item label={t('encoding')} name={[...name, 'encoding']}>
        <Input className="nodrag" size="large" />
      </Form.Item>

      <FileLineSeparator name={name} options={JSON_LINE_SEPARATOR_SELECT_OPTIONS} />

      <FileCompression name={name} options={JSON_LINE_COMPRESSION_SELECT_OPTIONS} />
    </>
  );
};
