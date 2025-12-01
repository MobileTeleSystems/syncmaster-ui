import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { isValidRegex } from '@shared/utils';

import classes from './styles.module.less';

export const FilterFileRegexpValue = ({ name }: { name: number }) => {
  const { t } = useTranslation('error');

  return (
    <Form.Item
      className={classes.control}
      label={t('value', { ns: 'transformation' })}
      name={[name, 'value']}
      rules={[{ type: 'string', required: true, validator: (rule, value) => isValidRegex(rule, value, t) }]}
    >
      <Input className="nodrag" size="large" />
    </Form.Item>
  );
};
