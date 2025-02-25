import React, { useMemo, useRef } from 'react';
import { Form, Input, InputNumber } from 'antd';
import { TransformationType } from '@entities/transformation';
import { Select } from '@shared/ui';
import { FileSizeUnit, parseFileSize } from '@entities/file/@x/transformation';

import { FILE_SIZE_UNIT_SELECT_OPTIONS } from './constants';
import { FilterFileSizeValueProps } from './types';

export const FilterFileSizeValue = ({ name }: FilterFileSizeValueProps) => {
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

  const unit = useRef(initialFileSizeControlData.unit);
  const value = useRef(initialFileSizeControlData.value);

  const concatValue = () => {
    const newValue = `${value.current}${unit.current}`;
    formInstance.setFieldValue(['transformations', TransformationType.FILTER_FILE, name, 'value'], newValue);
  };

  const handleChangeUnit = (newUnit: FileSizeUnit) => {
    unit.current = newUnit;
    concatValue();
  };

  const handleChangeValue = (newValue: number | null) => {
    value.current = newValue || 0;
    concatValue();
  };

  return (
    <>
      <Form.Item name={[name, 'value']} hidden>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item
        label="Value"
        initialValue={initialFileSizeControlData.value}
        name={[name, 'extra_value']}
        rules={[{ required: true }]}
      >
        <InputNumber className="nodrag" size="large" onChange={handleChangeValue} min={0} />
      </Form.Item>
      <Form.Item label="File size unit" required>
        <Select
          size="large"
          className="nodrag"
          options={FILE_SIZE_UNIT_SELECT_OPTIONS}
          defaultValue={initialFileSizeControlData.unit}
          onChange={handleChangeUnit}
          placeholder="Select file size unit"
        />
      </Form.Item>
    </>
  );
};
