import React from 'react';
import { Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import { CONNECTION_TYPE_NAMES } from '@entities/connection';
import { useTranslation } from 'react-i18next';

import { ConnectionDetailInfoProps } from './types';
import { getConnectionAuthData, getConnectionData } from './utils';

export const ConnectionDetailInfo = ({ connection, group, ...props }: ConnectionDetailInfoProps) => {
  const { t } = useTranslation('connection');

  return (
    <Descriptions title={t('connectionInfo')} bordered {...props}>
      <Descriptions.Item label={t('id', { ns: 'shared' })} span={3}>
        {connection.id}
      </Descriptions.Item>
      <Descriptions.Item label={t('name', { ns: 'shared' })} span={3}>
        {connection.name}
      </Descriptions.Item>
      <Descriptions.Item label={t('description', { ns: 'shared' })} span={3}>
        {connection.description}
      </Descriptions.Item>
      <Descriptions.Item label={t('group', { ns: 'group' })} span={3}>
        <Link to={`/groups/${group.id}`}>{group.name}</Link>
      </Descriptions.Item>
      <Descriptions.Item label={t('type', { ns: 'shared' })} span={3}>
        {CONNECTION_TYPE_NAMES[connection.type]}
      </Descriptions.Item>
      {getConnectionData(connection, t).map((item, index) => (
        <Descriptions.Item label={item.label} span={3} key={index}>
          {item.content}
        </Descriptions.Item>
      ))}
      {getConnectionAuthData(connection, t).map((item, index) => (
        <Descriptions.Item label={item.label} span={3} key={index}>
          {item.content}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};
