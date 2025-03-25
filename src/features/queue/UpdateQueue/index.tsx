import React from 'react';
import { ControlButtons, Fieldset, FormCurrentGroupDescription, ManagedForm } from '@shared/ui';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Queue, QUEUE_NAME_REGEXP, QueueQueryKey, queueService } from '@entities/queue';
import { useTranslation } from 'react-i18next';

import { UpdateQueueForm, UpdateQueueProps } from './types';
import { getUpdateQueueInitialValues } from './utils';

export const UpdateQueue = ({ queue, group }: UpdateQueueProps) => {
  const { t } = useTranslation();
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
      successMessage={t('updateQueueSuccess', { ns: 'queue' })}
      keysInvalidateQueries={[
        [{ queryKey: [QueueQueryKey.GET_QUEUES, group.id] }],
        [{ queryKey: [QueueQueryKey.GET_QUEUE, queue.id] }],
      ]}
    >
      <Fieldset title={t('mainInfo')}>
        <FormCurrentGroupDescription groupName={group.name} />

        <Form.Item label={t('name')} name="name" rules={[{ required: true, pattern: QUEUE_NAME_REGEXP }]}>
          <Input size="large" disabled />
        </Form.Item>

        <Form.Item label={t('description')} name="description">
          <Input size="large" />
        </Form.Item>
      </Fieldset>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
