import React from 'react';
import { Form, Input } from 'antd';

import { FileCompression } from '../FileCompression';

import { FILE_XML_COMPRESSION_SELECT_OPTIONS } from './constants';
import { FileFormatXmlProps } from './types';

export const FileFormatXml = ({ name }: FileFormatXmlProps) => {
  return (
    <>
      <Form.Item label="Root tag" name={[...name, 'root_tag']} rules={[{ required: true }]}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item label="Row tag" name={[...name, 'row_tag']} rules={[{ required: true }]}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <FileCompression name={name} options={FILE_XML_COMPRESSION_SELECT_OPTIONS} />;
    </>
  );
};
