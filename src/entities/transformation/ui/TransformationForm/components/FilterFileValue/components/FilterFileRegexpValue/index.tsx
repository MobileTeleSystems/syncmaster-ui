import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { FilterFileRegexpValueProps } from './types';
import classes from './styles.module.less';
import { getControlRules } from './utils';

export const FilterFileRegexpValue = ({ name, type }: FilterFileRegexpValueProps) => {
  const { t } = useTranslation('error');

  return (
    <Form.Item
      className={classes.control}
      label={t('value', { ns: 'transformation' })}
      name={[name, 'value']}
      rules={getControlRules(t)[type]}
    >
      <Input className="nodrag" size="large" />
    </Form.Item>
  );
};
