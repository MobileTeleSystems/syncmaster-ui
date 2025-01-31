import React from 'react';
import { Form, Input } from 'antd';
import { ABSOLUTE_PATH_REGEXP } from '@shared/constants';
import { Select } from '@shared/ui';

import {
  TRANSFER_SOURCE_CONNECTION_FILE_FORMAT_SELECT_OPTIONS,
  TRANSFER_TARGET_CONNECTION_FILE_FORMAT_SELECT_OPTIONS,
} from '../../constants';

import { TransferConnectionS3Props } from './types';

export const TransferConnectionS3 = ({ name }: TransferConnectionS3Props) => {
  return (
    <>
      <Form.Item
        label="Directory path"
        name={[name, 'directory_path']}
        rules={[{ required: true, pattern: ABSOLUTE_PATH_REGEXP }]}
      >
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item label="File format" name={[name, 'file_format', 'type']} rules={[{ required: true }]}>
        <Select
          /** className "nodrag" for opening dropdown in select in custom node React Flow https://github.com/xyflow/xyflow/discussions/2694 */
          className="nodrag"
          size="large"
          options={
            name === 'source_params'
              ? TRANSFER_SOURCE_CONNECTION_FILE_FORMAT_SELECT_OPTIONS
              : TRANSFER_TARGET_CONNECTION_FILE_FORMAT_SELECT_OPTIONS
          }
          placeholder="Select file format"
        />
      </Form.Item>
    </>
  );
};
