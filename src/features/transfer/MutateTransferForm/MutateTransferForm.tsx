import React from 'react';
import { QueueQueryKey, queueService } from '@entities/queue';
import { ControlButtons, Fieldset, FormCurrentGroupDescription, ManagedSelect } from '@shared/ui';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { MutateTransferFormProps } from './types';
import { StrategyParams, TransferConnections, TransferResources, TransferSchedule } from './components';

export const MutateTransferForm = ({ group, onCancel }: MutateTransferFormProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Fieldset title={t('mainInfo')}>
        <FormCurrentGroupDescription groupName={group.name} />
        <Form.Item label={t('name')} name="name" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>
        <Form.Item label={t('description')} name="description" initialValue={""}>
          <Input size="large" />
        </Form.Item>

        <Form.Item label={t('queue', { ns: 'queue' })} name="queue_id" rules={[{ required: true }]}>
          <ManagedSelect
            size="large"
            queryKey={[QueueQueryKey.GET_QUEUES, group.id]}
            queryFunction={(params) => queueService.getQueues({ group_id: group.id, ...params })}
            renderOptionValue={(queue) => queue.id}
            renderOptionLabel={(queue) => queue.name}
            detailQueryKey={[QueueQueryKey.GET_QUEUE]}
            detailQueryFunction={(value) => queueService.getQueue({ id: value })}
            placeholder={t('selectQueue', { ns: 'queue' })}
          />
        </Form.Item>
      </Fieldset>

      <TransferConnections groupId={group.id} />

      <StrategyParams />

      <TransferResources />

      <TransferSchedule />

      <ControlButtons onCancel={onCancel} />
    </>
  );
};
