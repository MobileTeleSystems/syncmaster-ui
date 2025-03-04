import React, { PropsWithChildren } from 'react';
import { Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import { CronService } from '@shared/services';

import { TransferDetailInfoProps } from './types';
import classes from './styles.module.less';
import { TransferParams, TransferStrategyParams } from './components';

export const TransferDetailInfo = ({
  transfer,
  group,
  connectionSource,
  connectionTarget,
  queue,
  children,
  ...props
}: PropsWithChildren<TransferDetailInfoProps>) => {
  return (
    <div className={classes.root}>
      <Descriptions title="Transfer info" bordered {...props}>
        <Descriptions.Item label="Id" span={3}>
          {transfer.id}
        </Descriptions.Item>
        <Descriptions.Item label="Name" span={3}>
          {transfer.name}
        </Descriptions.Item>
        <Descriptions.Item label="Description" span={3}>
          {transfer.description}
        </Descriptions.Item>
        <Descriptions.Item label="Group" span={3}>
          <Link to={`/groups/${group.id}`}>{group.name}</Link>
        </Descriptions.Item>
        <Descriptions.Item label="Queue" span={3}>
          <Link to={`/queues/${queue.id}`}>{queue.name}</Link>
        </Descriptions.Item>
        {transfer.is_scheduled && (
          <Descriptions.Item label="Schedule" span={3}>
            {new CronService(transfer.schedule).getSchedule()}
          </Descriptions.Item>
        )}
        <Descriptions.Item className={classes.subDescription} label="Strategy params" span={3}>
          <TransferStrategyParams data={transfer.strategy_params} />
        </Descriptions.Item>
        <Descriptions.Item label="Source connection" span={3}>
          <Link to={`/connections/${connectionSource.id}`}>{connectionSource.name}</Link>
        </Descriptions.Item>
        <Descriptions.Item label="Target connection" span={3}>
          <Link to={`/connections/${connectionTarget.id}`}>{connectionTarget.name}</Link>
        </Descriptions.Item>
        <Descriptions.Item className={classes.subDescription} label="Source params" span={3}>
          <TransferParams data={transfer.source_params} />
        </Descriptions.Item>
        <Descriptions.Item className={classes.subDescription} label="Target params" span={3}>
          <TransferParams data={transfer.target_params} />
        </Descriptions.Item>
      </Descriptions>
      {children}
    </div>
  );
};
