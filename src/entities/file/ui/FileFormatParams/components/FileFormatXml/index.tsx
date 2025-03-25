import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { FileCompression } from '../FileCompression';

import { FILE_XML_COMPRESSION_SELECT_OPTIONS } from './constants';
import { FileFormatXmlProps } from './types';

export const FileFormatXml = ({ name }: FileFormatXmlProps) => {
  const { t } = useTranslation('file');

  return (
    <>
      <Form.Item label={t('rootTag')} name={[...name, 'root_tag']} rules={[{ required: true }]}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item label={t('rowTag')} name={[...name, 'row_tag']} rules={[{ required: true }]}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <FileCompression name={name} options={FILE_XML_COMPRESSION_SELECT_OPTIONS} />;
    </>
  );
};
