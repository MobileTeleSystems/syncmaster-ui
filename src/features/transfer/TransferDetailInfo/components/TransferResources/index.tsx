import React from 'react';
import { Descriptions } from 'antd';
import { useTranslation } from 'react-i18next';
import { FileSizeUnitValue } from '@entities/file';

import { TransferResourcesProps } from './types';

export const TransferResources = ({ data, ...props }: TransferResourcesProps) => {
  const { t } = useTranslation('transfer');

  return (
    <Descriptions {...props}>
      <Descriptions.Item label={t('maxParallelTasks')} span={3}>
        {data.max_parallel_tasks}
      </Descriptions.Item>
      <Descriptions.Item label={t('cpuCoresPerTask')} span={3}>
        {data.cpu_cores_per_task}
      </Descriptions.Item>
      <Descriptions.Item label={t('ramPerTask')} span={3}>
        {+data.ram_bytes_per_task / FileSizeUnitValue.GiB} {t('gib', { ns: 'file' })}
      </Descriptions.Item>
    </Descriptions>
  );
};
