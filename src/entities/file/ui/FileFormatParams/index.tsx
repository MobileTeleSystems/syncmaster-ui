import React from 'react';
import { Form } from 'antd';
import { Select } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { FileFormatParamsProps } from './types';
import { SOURCE_FILE_FORMAT_SELECT_OPTIONS, TARGET_FILE_FORMAT_SELECT_OPTIONS } from './constants';
import { getFileFormatComponent } from './utils';

export const FileFormatParams = ({ name }: FileFormatParamsProps) => {
  const { t } = useTranslation('file');

  /* useWatch takes a value from Form.Item, but useFormInstance takes one from general form state
   * useWatch returns undefined when Form.Item has not rendered yet
   * https://github.com/ant-design/ant-design/issues/49010
   */
  Form.useWatch([name, 'file_format', 'type']);
  const fileFormatType = Form.useFormInstance().getFieldValue([name, 'file_format', 'type']);

  return (
    <>
      <Form.Item label={t('fileFormat')} name={[name, 'file_format', 'type']} rules={[{ required: true }]}>
        <Select
          /** className "nodrag" and "nowheel" for select in custom node React Flow https://reactflow.dev/api-reference/react-flow#no-drag-class-name */
          className="nodrag"
          popupClassName="nowheel"
          size="large"
          options={name === 'source_params' ? SOURCE_FILE_FORMAT_SELECT_OPTIONS : TARGET_FILE_FORMAT_SELECT_OPTIONS}
          placeholder={t('selectFileFormat')}
        />
      </Form.Item>
      {getFileFormatComponent({
        name: [name, 'file_format'],
        fileFormatType,
      })}
    </>
  );
};
