import React from 'react';
import { Form, Input, Radio } from 'antd';

import { FileCompression } from '../FileCompression';

import { CSV_COMPRESSION_SELECT_OPTIONS } from './constants';
import { FileFormatCsvProps } from './types';

export const FileFormatCsv = ({ name }: FileFormatCsvProps) => {
  return (
    <>
      <Form.Item label="Delimiter" name={[...name, 'delimiter']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item label="Encoding" name={[...name, 'encoding']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item label="Quote" name={[...name, 'quote']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item label="Escape" name={[...name, 'escape']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item label="Include header" name={[...name, 'include_header']}>
        <Radio.Group>
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Line separator" name={[...name, 'line_sep']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <FileCompression name={name} options={CSV_COMPRESSION_SELECT_OPTIONS} />
    </>
  );
};
