import React from 'react';
import { Descriptions } from 'antd';
import { CONNECTION_TYPE_NAMES } from '@entities/connection';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TransferParamsProps } from './types';
import { getDescriptionItems } from './utils';

export const TransferParams = ({ data, connection, ...props }: TransferParamsProps) => {
  const { t } = useTranslation();

  return (
    <Descriptions {...props}>
      <Descriptions.Item label={t('connection', { ns: 'connection' })} span={3}>
        <Link to={`/connections/${connection.id}`}>
          {connection.name} ({CONNECTION_TYPE_NAMES[data.type]})
        </Link>
      </Descriptions.Item>
      {getDescriptionItems({ data, t }).map((item, index) => (
        <Descriptions.Item label={item.label} span={3} key={index}>
          {item.content}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};
