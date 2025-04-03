import React from 'react';
import { ControlButtons, Fieldset, ManagedForm, ManagedSelect } from '@shared/ui';
import { GroupData, GroupQueryKey, groupService } from '@entities/group';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserQueryKey, userService } from '@entities/user';
import { useTranslation } from 'react-i18next';

import { UpdateGroupForm, UpdateGroupProps } from './types';
import { getUpdateGroupInitialValues } from './utils';

export const UpdateGroup = ({ group }: UpdateGroupProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleUpdateGroup = (values: UpdateGroupForm) => {
    return groupService.updateGroup({ ...values, id: group.id });
  };

  const onSuccess = (response: GroupData) => {
    navigate(`/groups/${response.id}`);
  };

  const onCancel = () => {
    navigate('/groups');
  };

  return (
    <ManagedForm<UpdateGroupForm, GroupData>
      mutationFunction={handleUpdateGroup}
      initialValues={getUpdateGroupInitialValues(group)}
      onSuccess={onSuccess}
      successMessage={t('updateGroupSuccess', { ns: 'group' })}
      keysInvalidateQueries={[
        [{ queryKey: [GroupQueryKey.GET_GROUPS] }],
        [{ queryKey: [GroupQueryKey.GET_GROUP, group.id] }],
      ]}
    >
      <Fieldset title={t('mainInfo')}>
        <Form.Item label={t('name')} name="name" rules={[{ required: true }]}>
          <Input size="large" />
        </Form.Item>

        <Form.Item label={t('description')} name="description" initialValue="">
          <Input size="large" />
        </Form.Item>

        <Form.Item label={t('owner', { ns: 'auth' })} name="owner_id" rules={[{ required: true }]}>
          <ManagedSelect
            size="large"
            queryKey={[UserQueryKey.GET_USERS]}
            queryFunction={userService.getUsers}
            renderOptionValue={(user) => user.id}
            renderOptionLabel={(user) => user.username}
            detailQueryKey={[UserQueryKey.GET_USER]}
            detailQueryFunction={(value) => userService.getUser({ id: value })}
            //TODO: [DOP-20030] Need to delete prop "disabled" when the backend leaves the user with access to the group, even after changing the owner
            disabled
          />
        </Form.Item>
      </Fieldset>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
