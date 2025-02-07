import React from 'react';
import { Form } from 'antd';
import { Select } from '@shared/ui';

import { FileFormatParamsProps } from './types';
import { SOURCE_FILE_FORMAT_SELECT_OPTIONS, TARGET_FILE_FORMAT_SELECT_OPTIONS } from './constants';
import { getFileFormatComponent } from './utils';

export const FileFormatParams = ({ name }: FileFormatParamsProps) => {
  /** Need combine useWatch and useFormInstance, because useWatch return undefined while this component is rendered first time after mounting */
  Form.useWatch([name, 'file_format', 'type']);
  const fileFormatType = Form.useFormInstance().getFieldValue([name, 'file_format', 'type']);

  return (
    <>
      <Form.Item label="File format" name={[name, 'file_format', 'type']} rules={[{ required: true }]}>
        <Select
          className="nodrag"
          size="large"
          options={name === 'source_params' ? SOURCE_FILE_FORMAT_SELECT_OPTIONS : TARGET_FILE_FORMAT_SELECT_OPTIONS}
          placeholder="Select file format"
        />
      </Form.Item>
      {getFileFormatComponent({
        name: [name, 'file_format'],
        fileFormatType,
      })}
    </>
  );
};
