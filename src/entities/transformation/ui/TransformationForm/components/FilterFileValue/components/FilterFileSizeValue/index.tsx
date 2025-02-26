import React, { memo } from 'react';
import { Form, InputNumber } from 'antd';
import { Select } from '@shared/ui';

import { FILE_SIZE_UNIT_SELECT_OPTIONS } from './constants';
import { FilterFileSizeValueProps } from './types';
import classes from './styles.module.less';

export const FilterFileSizeValue = memo(({ name }: FilterFileSizeValueProps) => {
  return (
    <>
      <Form.Item label="Value" name={[name, 'extra_value']} rules={[{ required: true }]}>
        <InputNumber className="nodrag" size="large" min={0} />
      </Form.Item>
      <Form.Item className={classes.select} label="File size unit" name={[name, 'unit']} rules={[{ required: true }]}>
        <Select size="large" className="nodrag" options={FILE_SIZE_UNIT_SELECT_OPTIONS} placeholder="Select unit" />
      </Form.Item>
    </>
  );
});
