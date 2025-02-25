import React from 'react';
import { Form, Input } from 'antd';

import { FilterFileRegexpValueProps } from './types';
import classes from './styles.module.less';
import { CONTROL_RULES } from './constants';

export const FilterFileRegexpValue = ({ name, type }: FilterFileRegexpValueProps) => {
  return (
    <Form.Item className={classes.control} label="Value" name={[name, 'value']} rules={CONTROL_RULES[type]}>
      <Input className="nodrag" size="large" />
    </Form.Item>
  );
};
