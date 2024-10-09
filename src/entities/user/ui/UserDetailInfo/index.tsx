import React, { memo } from 'react';
import { Descriptions } from 'antd';
import { User } from '@entities/user';

interface UserDetailInfoProps extends User {}

export const UserDetailInfo = memo(({ id, username, is_superuser }: UserDetailInfoProps) => {
  return (
    <Descriptions title="User info" bordered>
      <Descriptions.Item label={'Id'} span={3}>
        {id}
      </Descriptions.Item>
      <Descriptions.Item label={'Username'} span={3}>
        {username}
      </Descriptions.Item>
      <Descriptions.Item label={'Is superuser'} span={3}>
        {is_superuser ? 'Yes' : 'Not'}
      </Descriptions.Item>
    </Descriptions>
  );
});
