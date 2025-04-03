import React from 'react';
import { ControlButtons, Fieldset, ManagedForm } from '@shared/ui';
import { GroupData, GroupQueryKey, groupService } from '@entities/group';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const CreateGroup = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSuccess = (response: GroupData) => {
    navigate(`/groups/${response.id}`);
  };

  const onCancel = () => {
    navigate('/groups');
  };

  return (
    <ManagedForm
      mutationFunction={groupService.createGroup}
      onSuccess={onSuccess}
      successMessage={t('createGroupSuccess', { ns: 'group' })}
      keysInvalidateQueries={[[{ queryKey: [GroupQueryKey.GET_GROUPS] }]]}
    >
      <Fieldset title={t('mainInfo')}>
        <Form.Item label={t('name')} name="name" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>

        <Form.Item label={t('description')} name="description" initialValue={""}>
          <Input size="large" />
        </Form.Item>
      </Fieldset>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
