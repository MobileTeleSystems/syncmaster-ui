import React from 'react';
import { ControlButtons, FormCurrentGroupDescription, ManagedForm } from '@shared/ui';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Queue, QUEUE_NAME_REGEXP, QueueQueryKey, queueService } from '@entities/queue';

import { UpdateQueueForm, UpdateQueueProps } from './types';
import { getUpdateQueueInitialValues } from './utils';

export const UpdateQueue = ({ queue, group }: UpdateQueueProps) => {
  const navigate = useNavigate();

  const handleUpdateQueue = (values: UpdateQueueForm) => {
    return queueService.updateQueue({ ...values, id: queue.id });
  };

  const onSuccess = (response: Queue) => {
    navigate(`/queues/${response.id}`);
  };

  const onCancel = () => {
    navigate('/queues');
  };

  return (
    <ManagedForm<UpdateQueueForm, Queue>
      mutationFunction={handleUpdateQueue}
      initialValues={getUpdateQueueInitialValues(queue)}
      onSuccess={onSuccess}
      successMessage="Queue was updated successfully"
      keysInvalidateQueries={[
        [{ queryKey: [QueueQueryKey.GET_QUEUES, group.id] }],
        [{ queryKey: [QueueQueryKey.GET_QUEUE, queue.id] }],
      ]}
    >
      <FormCurrentGroupDescription groupName={group.name} />

      <Form.Item label="Name" name="name" rules={[{ required: true, pattern: QUEUE_NAME_REGEXP }]}>
        <Input size="large" disabled />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input size="large" />
      </Form.Item>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
