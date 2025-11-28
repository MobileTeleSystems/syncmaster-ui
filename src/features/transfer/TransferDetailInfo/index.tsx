import React, { PropsWithChildren } from 'react';
import { Descriptions } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCronService } from '@shared/services';

import { TransferDetailInfoProps } from './types';
import classes from './styles.module.less';
import { TransferParams, TransferResources, TransferStrategyParams } from './components';

export const TransferDetailInfo = ({
  transfer,
  group,
  connectionSource,
  connectionTarget,
  queue,
  children,
  ...props
}: PropsWithChildren<TransferDetailInfoProps>) => {
  const { t } = useTranslation();
  const cron = useCronService({ value: transfer.schedule });

  return (
    <div className={classes.root}>
      <Descriptions title={t('transferInfo', { ns: 'transfer' })} bordered {...props}>
        <Descriptions.Item label={t('id')} span={3}>
          {transfer.id}
        </Descriptions.Item>
        <Descriptions.Item label={t('name')} span={3}>
          {transfer.name}
        </Descriptions.Item>
        <Descriptions.Item label={t('description')} span={3}>
          {transfer.description}
        </Descriptions.Item>
        <Descriptions.Item label={t('group', { ns: 'group' })} span={3}>
          <Link to={`/groups/${group.id}`}>{group.name}</Link>
        </Descriptions.Item>
        <Descriptions.Item label={t('queue', { ns: 'queue' })} span={3}>
          <Link to={`/queues/${queue.id}`}>{queue.name}</Link>
        </Descriptions.Item>
        {transfer.is_scheduled && (
          <Descriptions.Item label={t('schedule', { ns: 'transfer' })} span={3}>
            {cron.getSchedule()}
          </Descriptions.Item>
        )}
        <Descriptions.Item className={classes.subDescription} label={t('strategyParams', { ns: 'transfer' })} span={3}>
          <TransferStrategyParams data={transfer.strategy_params} />
        </Descriptions.Item>
        <Descriptions.Item className={classes.subDescription} label={t('resources', { ns: 'transfer' })} span={3}>
          <TransferResources data={transfer.resources} />
        </Descriptions.Item>
        <Descriptions.Item label={t('sourceConnection', { ns: 'transfer' })} span={3}>
          <Link to={`/connections/${connectionSource.id}`}>{connectionSource.name}</Link>
        </Descriptions.Item>
        <Descriptions.Item label={t('targetConnection', { ns: 'transfer' })} span={3}>
          <Link to={`/connections/${connectionTarget.id}`}>{connectionTarget.name}</Link>
        </Descriptions.Item>
        <Descriptions.Item className={classes.subDescription} label={t('sourceParams', { ns: 'transfer' })} span={3}>
          <TransferParams data={transfer.source_params} />
        </Descriptions.Item>
        <Descriptions.Item className={classes.subDescription} label={t('targetParams', { ns: 'transfer' })} span={3}>
          <TransferParams data={transfer.target_params} />
        </Descriptions.Item>
      </Descriptions>
      {children}
    </div>
  );
};
