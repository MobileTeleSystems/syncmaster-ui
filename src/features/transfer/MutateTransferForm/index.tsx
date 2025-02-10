import React from 'react';
import { QueueQueryKey, queueService } from '@entities/queue';
import { TRANSFER_STRATEGY_PARAMS_SELECT_OPTIONS } from '@entities/transfer';
import { ControlButtons, Fieldset, FormCurrentGroupDescription, ManagedSelect, Select } from '@shared/ui';
import { Form, Input } from 'antd';

import { MutateTransferFormProps } from './types';
import { TransferConnections, TransferSchedule } from './components';

export const MutateTransferForm = ({ group, onCancel }: MutateTransferFormProps) => {
  return (
    <>
      <Fieldset title="Main info">
        <FormCurrentGroupDescription groupName={group.name} />
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>
        <Form.Item label="Description" name="description" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>

        <Form.Item label="Queue" name="queue_id" rules={[{ required: true }]}>
          <ManagedSelect
            size="large"
            queryKey={[QueueQueryKey.GET_QUEUES, group.id]}
            queryFunction={(params) => queueService.getQueues({ group_id: group.id, ...params })}
            renderOptionValue={(queue) => queue.id}
            renderOptionLabel={(queue) => queue.name}
            detailQueryKey={[QueueQueryKey.GET_QUEUE]}
            detailQueryFunction={(value) => queueService.getQueue({ id: value })}
            placeholder="Select queue"
          />
        </Form.Item>

        <Form.Item label="Strategy params" name={['strategy_params', 'type']} rules={[{ required: true }]}>
          <Select size="large" options={TRANSFER_STRATEGY_PARAMS_SELECT_OPTIONS} placeholder="Select strategy" />
        </Form.Item>
      </Fieldset>

      <TransferConnections groupId={group.id} />

      <TransferSchedule />

      <ControlButtons onCancel={onCancel} />
    </>
  );
};
