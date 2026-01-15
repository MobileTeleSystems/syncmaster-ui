import React from 'react';
import { Form, Input } from 'antd';
import { TransformationFilterRowsType } from '@entities/transformation';
import { useTranslation } from 'react-i18next';

import { FilterRowsValueProps } from './types';
import * as classes from './styles.module.less';

export const FilterRowsValue = ({ name, type }: FilterRowsValueProps) => {
  const { t } = useTranslation('transformation');

  switch (type) {
    case TransformationFilterRowsType.IS_NULL:
    case TransformationFilterRowsType.IS_NOT_NULL:
    case undefined:
      return null;
    default:
      return (
        <Form.Item className={classes.control} label={t('value')} name={[name, 'value']} rules={[{ required: true }]}>
          <Input className="nodrag" size="large" />
        </Form.Item>
      );
  }
};
