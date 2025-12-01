import React from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import classes from './styles.module.less';
import { NAME_GLOB_PATTERN } from './constants';

export const FilterFileGlobValue = ({ name }: { name: number }) => {
  const { t } = useTranslation('error');

  return (
    <Form.Item
      className={classes.control}
      label={t('value', { ns: 'transformation' })}
      name={[name, 'value']}
      rules={[{ type: 'string', required: true, pattern: NAME_GLOB_PATTERN }]}
    >
      <Input className="nodrag" size="large" />
    </Form.Item>
  );
};
