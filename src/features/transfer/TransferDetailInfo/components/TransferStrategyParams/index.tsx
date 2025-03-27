import React from 'react';
import { Descriptions } from 'antd';
import { useTranslation } from 'react-i18next';

import { TransferStrategyParamsProps } from './types';

export const TransferStrategyParams = ({ data, ...props }: TransferStrategyParamsProps) => {
  const { t } = useTranslation('transfer');

  return (
    <Descriptions {...props}>
      <Descriptions.Item label={t('type', { ns: 'shared' })} span={3}>
        {data.type}
      </Descriptions.Item>
      {data.increment_by && (
        <Descriptions.Item label={t('incrementBy')} span={3}>
          {data.increment_by}
        </Descriptions.Item>
      )}
    </Descriptions>
  );
};
