import React from 'react';
import { Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { QueueDetailInfoProps } from './types';

export const QueueDetailInfo = ({ queue, group, ...props }: QueueDetailInfoProps) => {
  const { t } = useTranslation();

  return (
    <Descriptions title={t('queueInfo', { ns: 'queue' })} bordered {...props}>
      <Descriptions.Item label={t('id')} span={3}>
        {queue.id}
      </Descriptions.Item>
      <Descriptions.Item label={t('name')} span={3}>
        {queue.name}
      </Descriptions.Item>
      <Descriptions.Item label={t('slug')} span={3}>
        {queue.slug}
      </Descriptions.Item>
      <Descriptions.Item label={t('description')} span={3}>
        {queue.description}
      </Descriptions.Item>
      <Descriptions.Item label={t('group', { ns: 'group' })} span={3}>
        <Link to={`/groups/${group.id}`}>{group.name}</Link>
      </Descriptions.Item>
    </Descriptions>
  );
};
