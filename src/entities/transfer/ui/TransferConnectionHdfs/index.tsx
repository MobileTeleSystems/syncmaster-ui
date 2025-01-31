import React from 'react';
import { Form, Input } from 'antd';
import {
  TRANSFER_SOURCE_CONNECTION_FILE_FORMAT_SELECT_OPTIONS,
  TRANSFER_TARGET_CONNECTION_FILE_FORMAT_SELECT_OPTIONS,
} from '@entities/transfer';
import { ABSOLUTE_PATH_REGEXP } from '@shared/constants';
import { Select } from '@shared/ui';

import { TransferConnectionHdfsProps } from './types';

export const TransferConnectionHdfs = ({ name }: TransferConnectionHdfsProps) => {
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
