import React from 'react';
import { Descriptions } from 'antd';
import { Link } from 'react-router-dom';

import { GroupDetailInfoProps } from './types';

export const GroupDetailInfo = ({ group, owner, ...props }: GroupDetailInfoProps) => {
  return (
    <Descriptions title="Group info" bordered {...props}>
      <Descriptions.Item label="Id" span={3}>
        {group.id}
      </Descriptions.Item>
      <Descriptions.Item label="Name" span={3}>
        {group.name}
      </Descriptions.Item>
      <Descriptions.Item label="Description" span={3}>
        {group.description}
      </Descriptions.Item>
      <Descriptions.Item label="Owner" span={3}>
        <Link to={`/users/${owner.id}`}>{owner.username}</Link>
      </Descriptions.Item>
    </Descriptions>
  );
};
