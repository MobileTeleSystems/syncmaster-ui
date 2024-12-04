import React from 'react';
import { Descriptions } from 'antd';
import { Link } from 'react-router-dom';

import { ConnectionDetailInfoProps } from './types';
import { getConnectionAuthData, getConnectionData } from './utils';

export const ConnectionDetailInfo = ({ connection, group, ...props }: ConnectionDetailInfoProps) => {
  return (
    <Descriptions title="Connection info" bordered {...props}>
      <Descriptions.Item label="Id" span={3}>
        {connection.id}
      </Descriptions.Item>
      <Descriptions.Item label="Name" span={3}>
        {connection.name}
      </Descriptions.Item>
      <Descriptions.Item label="Description" span={3}>
        {connection.description}
      </Descriptions.Item>
      <Descriptions.Item label="Group" span={3}>
        <Link to={`/groups/${group.id}`}>{group.name}</Link>
      </Descriptions.Item>
      <Descriptions.Item label="Type" span={3}>
        {connection.connection_data.type}
      </Descriptions.Item>
      {getConnectionAuthData({ data: connection.auth_data }).map((item, index) => (
        <Descriptions.Item label={item.label} span={3} key={index}>
          {item.content}
        </Descriptions.Item>
      ))}
      {getConnectionData({ data: connection.connection_data }).map((item, index) => (
        <Descriptions.Item label={item.label} span={3} key={index}>
          {item.content}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};
