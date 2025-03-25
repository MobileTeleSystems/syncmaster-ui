import React from 'react';
import { Descriptions } from 'antd';
import { CONNECTION_TYPE_NAMES } from '@entities/connection';
import { useTranslation } from 'react-i18next';

import { TransferParamsProps } from './types';
import { getDescriptionItems } from './utils';

export const TransferParams = ({ data, ...props }: TransferParamsProps) => {
  const { t } = useTranslation();

  return (
    <Descriptions {...props}>
      <Descriptions.Item label={t('type')} span={3}>
        {CONNECTION_TYPE_NAMES[data.type]}
      </Descriptions.Item>
      {getDescriptionItems({ data, t }).map((item, index) => (
        <Descriptions.Item label={item.label} span={3} key={index}>
          {item.content}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};
