import React from 'react';
import { Divider, Form, Input } from 'antd';
import { ABSOLUTE_PATH_REGEXP } from '@shared/constants';
import { FileFormatParams, FileNameTemplate } from '@entities/file/@x/transfer';

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
      {name === 'target_params' && <FileNameTemplate />}
      <Divider>File format settings</Divider>
      <FileFormatParams name={name} />
    </>
  );
};
