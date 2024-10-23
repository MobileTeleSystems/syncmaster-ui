import React from 'react';
import { Descriptions } from 'antd';
import { Link } from 'react-router-dom';

import { QueueDetailInfoProps } from './types';

export const QueueDetailInfo = ({ queue, group, ...props }: QueueDetailInfoProps) => {
  return (
    <Descriptions title="Queue info" bordered {...props}>
      <Descriptions.Item label="Id" span={3}>
        {queue.id}
      </Descriptions.Item>
      <Descriptions.Item label="Name" span={3}>
        {queue.name}
      </Descriptions.Item>
      <Descriptions.Item label="Description" span={3}>
        {queue.description}
      </Descriptions.Item>
      <Descriptions.Item label="Group" span={3}>
        <Link to={`/groups/${group.id}`}>{group.name}</Link>
      </Descriptions.Item>
    </Descriptions>
  );
};
