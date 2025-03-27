import React from 'react';
import { Divider, Form, Input } from 'antd';
import { ABSOLUTE_PATH_REGEXP } from '@shared/constants';
import { FileFormatParams, FileNameTemplate } from '@entities/file/@x/transfer';
import { useTranslation } from 'react-i18next';

import { TransferConnectionFileTypeProps } from './types';

export const TransferConnectionFileType = ({ name }: TransferConnectionFileTypeProps) => {
  const { t } = useTranslation('transfer');

  return (
    <>
      <Form.Item
        label={t('directoryPath')}
        name={[name, 'directory_path']}
        rules={[{ required: true, pattern: ABSOLUTE_PATH_REGEXP }]}
      >
        <Input className="nodrag" size="large" />
      </Form.Item>
      {name === 'target_params' && <FileNameTemplate />}
      <Divider>{t('fileFormatSettings', { ns: 'file' })}</Divider>
      <FileFormatParams name={name} />
    </>
  );
};
