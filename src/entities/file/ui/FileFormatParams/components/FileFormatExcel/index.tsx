import { Form, Input, Radio } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { FileFormatExcelProps } from './types';

export const FileFormatExcel = ({ name }: FileFormatExcelProps) => {
  const { t } = useTranslation('file');

  return (
    <>
      <Form.Item label={t('includeHeader')} name={[...name, 'include_header']}>
        <Radio.Group>
          <Radio value={true}>{t('yes', { ns: 'shared' })}</Radio>
          <Radio value={false}>{t('no', { ns: 'shared' })}</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label={t('startCell')} name={[...name, 'start_cell']}>
        <Input className="nodrag" size="large" />
      </Form.Item>
    </>
  );
};
