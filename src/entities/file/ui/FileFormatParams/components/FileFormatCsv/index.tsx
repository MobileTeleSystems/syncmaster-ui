import React from 'react';
import { Form, Input, Radio } from 'antd';
import { useTranslation } from 'react-i18next';

import { FileCompression } from '../FileCompression';

import { CSV_COMPRESSION_SELECT_OPTIONS } from './constants';
import { FileFormatCsvProps } from './types';

export const FileFormatCsv = ({ name }: FileFormatCsvProps) => {
  const { t } = useTranslation('file');

  return (
    <>
      <Form.Item label={t('delimiter')} name={[...name, 'delimiter']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item label={t('encoding')} name={[...name, 'encoding']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item label={t('quote')} name={[...name, 'quote']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item label={t('escape')} name={[...name, 'escape']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item label={t('includeHeader')} name={[...name, 'include_header']}>
        <Radio.Group>
          <Radio value={true}>{t('yes', { ns: 'shared' })}</Radio>
          <Radio value={false}>{t('no', { ns: 'shared' })}</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={t('lineSeparator')} name={[...name, 'line_sep']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <FileCompression name={name} options={CSV_COMPRESSION_SELECT_OPTIONS} />
    </>
  );
};
