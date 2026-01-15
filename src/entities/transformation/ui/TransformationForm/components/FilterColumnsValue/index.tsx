import React from 'react';
import { Form, Input } from 'antd';
import { TransformationFilterColumnsType } from '@entities/transformation';
import { useTranslation } from 'react-i18next';

import { FilterColumnsValueProps } from './types';
import * as classes from './styles.module.less';

export const FilterColumnsValue = ({ name, type }: FilterColumnsValueProps) => {
  const { t } = useTranslation('transformation');

  switch (type) {
    case TransformationFilterColumnsType.INCLUDE:
    case undefined:
      return null;
    case TransformationFilterColumnsType.RENAME:
      return (
        <Form.Item className={classes.control} label={t('value')} name={[name, 'to']} rules={[{ required: true }]}>
          <Input className="nodrag" size="large" />
        </Form.Item>
      );
    case TransformationFilterColumnsType.CAST:
      return (
        <Form.Item className={classes.control} label={t('value')} name={[name, 'as_type']} rules={[{ required: true }]}>
          <Input className="nodrag" size="large" />
        </Form.Item>
      );
  }
};
