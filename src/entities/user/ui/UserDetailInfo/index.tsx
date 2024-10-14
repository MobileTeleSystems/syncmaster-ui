import React, { memo } from 'react';
import { Descriptions } from 'antd';

import { UserDetailInfoProps } from './types';

export const UserDetailInfo = memo(({ user }: UserDetailInfoProps) => {
  return (
    <Descriptions title="User info" bordered>
      <Descriptions.Item label="Id" span={3}>
        {user.id}
      </Descriptions.Item>
      <Descriptions.Item label="Username" span={3}>
        {user.username}
      </Descriptions.Item>
      <Descriptions.Item label="Is superuser" span={3}>
        {user.is_superuser ? 'Yes' : 'Not'}
      </Descriptions.Item>
    </Descriptions>
  );
});
