import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { FileCompression } from '../FileCompression';

import { JSON_COMPRESSION_SELECT_OPTIONS } from './constants';
import { FileFormatJsonProps } from './types';

export const FileFormatJson = ({ name }: FileFormatJsonProps) => {
  const { t } = useTranslation('file');

  return (
    <>
      <Form.Item label={t('encoding')} name={[...name, 'encoding']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item label={t('lineSeparator')} name={[...name, 'line_sep']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <FileCompression name={name} options={JSON_COMPRESSION_SELECT_OPTIONS} />
    </>
  );
};
