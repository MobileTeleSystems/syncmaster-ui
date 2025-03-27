import React from 'react';
import { ControlButtons, Fieldset, FormCurrentGroupDescription, ManagedForm } from '@shared/ui';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Queue, QUEUE_NAME_REGEXP, QueueQueryKey, queueService } from '@entities/queue';
import { useTranslation } from 'react-i18next';

import { CreateQueueForm, CreateQueueProps } from './types';

export const CreateQueue = ({ group }: CreateQueueProps) => {
  const { t } = useTranslation();
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
      successMessage={t('createQueueSuccess', { ns: 'queue' })}
      keysInvalidateQueries={[[{ queryKey: [QueueQueryKey.GET_QUEUES, group.id] }]]}
    >
      <Fieldset title={t('mainInfo')}>
        <FormCurrentGroupDescription groupName={group.name} />
        <Form.Item label={t('name')} name="name" rules={[{ required: true, pattern: QUEUE_NAME_REGEXP }]}>
          <Input size="large" />
        </Form.Item>
        <Form.Item label={t('description')} name="description">
          <Input size="large" />
        </Form.Item>
      </Fieldset>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
