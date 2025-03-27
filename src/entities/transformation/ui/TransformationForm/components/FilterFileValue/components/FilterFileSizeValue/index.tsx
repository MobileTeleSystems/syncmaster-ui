import React, { memo } from 'react';
import { Form, InputNumber } from 'antd';
import { Select } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { FilterFileSizeValueProps } from './types';
import classes from './styles.module.less';
import { useGetFileSizeUnitSelectOptions } from './hooks';

export const FilterFileSizeValue = memo(({ name }: FilterFileSizeValueProps) => {
  const { t } = useTranslation('transformation');
  const fileSizeUnitSelectOptions = useGetFileSizeUnitSelectOptions();

  return (
    <>
      <Form.Item label={t('value')} name={[name, 'extra_value']} rules={[{ required: true }]}>
        <InputNumber className="nodrag" size="large" min={0} />
      </Form.Item>
      <Form.Item
        className={classes.select}
        label={t('fileSizeUnit')}
        name={[name, 'unit']}
        rules={[{ required: true }]}
      >
        <Select size="large" className="nodrag" options={fileSizeUnitSelectOptions} placeholder={t('selectUnit')} />
      </Form.Item>
    </>
  );
});
