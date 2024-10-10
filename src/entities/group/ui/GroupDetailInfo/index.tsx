import React, { memo } from 'react';
import { Descriptions } from 'antd';
import { Group } from '@entities/group/api';
import { User } from '@entities/user';
import { Link } from 'react-router-dom';

interface GroupDetailInfoProps {
  group: Group;
  owner: User;
}

export const GroupDetailInfo = memo(({ group, owner }: GroupDetailInfoProps) => {
  return (
    <Descriptions title="Group info" bordered>
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
});
