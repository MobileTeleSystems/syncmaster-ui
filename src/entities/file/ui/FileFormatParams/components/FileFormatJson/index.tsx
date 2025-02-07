import React from 'react';
import { Form, Input } from 'antd';

import { FileCompression } from '../FileCompression';

import { JSON_COMPRESSION_SELECT_OPTIONS } from './constants';
import { FileFormatJsonProps } from './types';

export const FileFormatJson = ({ name }: FileFormatJsonProps) => {
  return (
    <>
      <Form.Item label="Encoding" name={[...name, 'encoding']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item label="Line separator" name={[...name, 'line_sep']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <FileCompression name={name} options={JSON_COMPRESSION_SELECT_OPTIONS} />
    </>
  );
};
