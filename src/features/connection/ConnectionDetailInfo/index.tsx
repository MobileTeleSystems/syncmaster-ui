import React from 'react';
import { Descriptions } from 'antd';
import { Link } from 'react-router-dom';

import { ConnectionDetailInfoProps } from './types';
import classes from './styles.module.less';
import { ConnectionAuthData, ConnectionData } from './components';

export const ConnectionDetailInfo = ({ connection, group, ...props }: ConnectionDetailInfoProps) => {
  return (
    <div className={classes.root}>
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
      </Descriptions>

      <ConnectionAuthData data={connection.auth_data} />
      <ConnectionData data={connection.connection_data} />
    </div>
  );
};
