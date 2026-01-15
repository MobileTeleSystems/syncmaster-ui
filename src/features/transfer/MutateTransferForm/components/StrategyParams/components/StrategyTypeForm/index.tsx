import React from 'react';
import { Select } from '@shared/ui';
import { Form } from 'antd';
import { TransferStrategyType } from '@entities/transfer';
import { ConnectionType } from '@shared/types';
import { useTranslation } from 'react-i18next';

import { StrategyTypeFormProps } from './types';
import { useGetStrategyParamsSelectOptions } from './hooks';

export const StrategyTypeForm = ({ sourceConnectionType }: StrategyTypeFormProps) => {
  const { t } = useTranslation('transfer');
  const strategyParamsSelectOptions = useGetStrategyParamsSelectOptions();

  const formInstance = Form.useFormInstance();
  Form.useWatch(['strategy_params', 'type'], formInstance);

  const supportsOnlyFull = sourceConnectionType === ConnectionType.HDFS || sourceConnectionType === ConnectionType.S3;
  if (supportsOnlyFull) {
    formInstance.setFieldValue(['strategy_params', 'type'], TransferStrategyType.FULL);
  }

  return (
    <Form.Item
      label={t('strategyParams')}
      name={['strategy_params', 'type']}
      rules={[{ required: true }]}
      initialValue="full"
    >
      <Select
        size="large"
        options={strategyParamsSelectOptions}
        placeholder={t('selectStrategy')}
        disabled={supportsOnlyFull}
      />
    </Form.Item>
  );
};
