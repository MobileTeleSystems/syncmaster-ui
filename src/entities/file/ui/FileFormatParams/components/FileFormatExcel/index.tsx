import { Form, Input, Radio } from 'antd';
import React from 'react';

import { FileFormatExcelProps } from './types';

export const FileFormatExcel = ({ name }: FileFormatExcelProps) => {
  return (
    <>
      <Form.Item label="Include header" name={[...name, 'include_header']}>
        <Radio.Group>
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Start cell" name={[...name, 'start_cell']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
    </>
  );
};
