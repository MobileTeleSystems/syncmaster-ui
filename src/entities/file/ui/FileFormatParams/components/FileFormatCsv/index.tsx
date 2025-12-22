import { Checkbox, Form, Input, Radio } from 'antd';
import { useTranslation } from 'react-i18next';
import { FileColumnDelimiter } from '@entities/file/types';

import { FileCompression } from '../FileCompression';
import { FileLineSeparator } from '../FileLineSeparator';

import {
  CSV_COMPRESSION_SELECT_OPTIONS,
  CSV_DELIMITER_SELECT_OPTIONS,
  CSV_ESCAPE_SELECT_OPTIONS,
  CSV_QUOTE_SELECT_OPTIONS,
  CSV_SEPARATOR_SELECT_OPTIONS,
} from './constants';
import { FileFormatCsvProps } from './types';

export const FileFormatCsv = ({ name }: FileFormatCsvProps) => {
  const { t } = useTranslation('file');

  return (
    <>
      <Form.Item label={t('encoding')} name={[...name, 'encoding']}>
        <Input className="nodrag" size="large" />
      </Form.Item>

      <Form.Item name={[...name, 'include_header']}>
        <Checkbox>{t('includeHeader')}</Checkbox>
      </Form.Item>

      <Form.Item
        label={t('delimiter')}
        name={[...name, 'delimiter']}
        initialValue={CSV_DELIMITER_SELECT_OPTIONS[0].value}
      >
        <Radio.Group>
          {CSV_DELIMITER_SELECT_OPTIONS.map((option) => (
            <Radio.Button key={option.value} value={option.value}>
              {t(`delimiters.${option.label as FileColumnDelimiter}`)}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <FileLineSeparator name={name} options={CSV_SEPARATOR_SELECT_OPTIONS} />

      <Form.Item label={t('quote')} name={[...name, 'quote']} initialValue={null}>
        <Radio.Group>
          {CSV_QUOTE_SELECT_OPTIONS.map((option) => (
            <Radio.Button key={option.value} value={option.value}>
              {option.label}
            </Radio.Button>
          ))}
          <Radio.Button value={null}>{t('no', { ns: 'shared' })}</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item label={t('escape')} name={[...name, 'escape']} initialValue={CSV_ESCAPE_SELECT_OPTIONS[0].value}>
        <Radio.Group>
          {CSV_ESCAPE_SELECT_OPTIONS.map((option) => (
            <Radio.Button key={option.value} value={option.value}>
              {option.label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <FileCompression name={name} options={CSV_COMPRESSION_SELECT_OPTIONS} />
    </>
  );
};
