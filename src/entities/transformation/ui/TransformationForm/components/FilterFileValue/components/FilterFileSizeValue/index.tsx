import React, { memo, useMemo } from 'react';
import { Form, InputNumber } from 'antd';
import { TransformationType } from '@entities/transformation';
import { Select } from '@shared/ui';
import { parseFileSize } from '@entities/file/@x/transformation';

import { FILE_SIZE_UNIT_SELECT_OPTIONS } from './constants';
import { FilterFileSizeValueProps } from './types';

export const FilterFileSizeValue = memo(({ name }: FilterFileSizeValueProps) => {
  const formInstance = Form.useFormInstance();

  const initialFileSizeControlData = useMemo(() => {
    const fileSizeValue = formInstance.getFieldValue([
      'transformations',
      TransformationType.FILTER_FILE,
      name,
      'value',
    ]);
    return parseFileSize(fileSizeValue);
  }, [formInstance, name]);

  return (
    <>
      <Form.Item
        label="Value"
        name={[name, 'extra_value']}
        initialValue={initialFileSizeControlData.value}
        rules={[{ required: true }]}
      >
        <InputNumber className="nodrag" size="large" min={0} />
      </Form.Item>
      <Form.Item
        label="File size unit"
        name={[name, 'unit']}
        initialValue={initialFileSizeControlData.unit}
        rules={[{ required: true }]}
      >
        <Select
          size="large"
          className="nodrag"
          options={FILE_SIZE_UNIT_SELECT_OPTIONS}
          placeholder="Select file size unit"
        />
      </Form.Item>
    </>
  );
});
