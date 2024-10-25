import React from 'react';
import { ControlButtons, FormCurrentGroupDescription, ManagedForm } from '@shared/ui';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Queue, QUEUE_NAME_REGEXP, QueueQueryKey, queueService } from '@entities/queue';

import { CreateQueueForm, CreateQueueProps } from './types';

export const CreateQueue = ({ group }: CreateQueueProps) => {
  const navigate = useNavigate();

  const handleCreateQueue = (values: CreateQueueForm) => {
    return queueService.createQueue({ ...values, group_id: group.id });
  };

  const onSuccess = (response: Queue) => {
    navigate(`/queues/${response.id}`);
  };

  const onCancel = () => {
    navigate('/queues');
  };

  return (
    <ManagedForm<CreateQueueForm, Queue>
      mutationFunction={handleCreateQueue}
      onSuccess={onSuccess}
      keysInvalidateQueries={[[{ queryKey: [QueueQueryKey.GET_QUEUES, group.id] }]]}
    >
      <FormCurrentGroupDescription groupName={group.name} />

      <Form.Item label="Name" name="name" rules={[{ required: true, pattern: QUEUE_NAME_REGEXP }]}>
        <Input size="large" />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input size="large" />
      </Form.Item>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
