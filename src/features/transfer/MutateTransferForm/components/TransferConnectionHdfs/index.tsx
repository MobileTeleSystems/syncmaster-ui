import React from 'react';
import { Form, Input, Select } from 'antd';
import {
  TRANSFER_SOURCE_CONNECTION_FILE_FORMAT_SELECT_OPTIONS,
  TRANSFER_TARGET_CONNECTION_FILE_FORMAT_SELECT_OPTIONS,
} from '@entities/transfer';
import { ABSOLUTE_PATH_REGEXP } from '@shared/constants';

import { TransferConnectionHdfsProps } from './types';

export const TransferConnectionHdfs = ({ name }: TransferConnectionHdfsProps) => {
  return (
    <>
      <Form.Item
        label="Directory path"
        name={[name, 'directory_path']}
        rules={[{ required: true, pattern: ABSOLUTE_PATH_REGEXP }]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item label="File format" name={[name, 'file_format', 'type']} rules={[{ required: true }]}>
        <Select
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
