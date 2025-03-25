import React from 'react';
import { ControlButtons, ManagedForm, ManagedSelect, Select } from '@shared/ui';
import { Form } from 'antd';
import { GroupQueryKey, groupService, useGetUserRoleInGroupSelectOptions } from '@entities/group';
import { UserQueryKey, userService } from '@entities/user';
import { useTranslation } from 'react-i18next';

import { AddGroupUserForm, AddGroupUserProps } from './types';

export const AddGroupUser = ({ groupId, onSuccess, onCancel }: AddGroupUserProps) => {
  const { t } = useTranslation('group');
  const userRoleInGroupSelectOptions = useGetUserRoleInGroupSelectOptions();

  const handleAddGroupUser = (values: AddGroupUserForm) => {
    return groupService.addGroupUser({ ...values, groupId });
  };

  return (
    <ManagedForm<AddGroupUserForm, null>
      mutationFunction={handleAddGroupUser}
      onSuccess={onSuccess}
      successMessage={t('addUserToGroupSuccess')}
      keysInvalidateQueries={[[{ queryKey: [GroupQueryKey.GET_GROUP_USERS, groupId] }]]}
    >
      <Form.Item label={t('user')} name="userId" rules={[{ required: true }]}>
        <ManagedSelect
          size="large"
          queryKey={[UserQueryKey.GET_USERS]}
          queryFunction={userService.getUsers}
          renderOptionLabel={(user) => user.username}
          renderOptionValue={(user) => user.id}
          detailQueryKey={[UserQueryKey.GET_USER]}
          detailQueryFunction={(value) => userService.getUser({ id: value })}
          placeholder={t('selectUser')}
        />
      </Form.Item>

      <Form.Item label={t('role')} name="role" rules={[{ required: true }]}>
        <Select size="large" options={userRoleInGroupSelectOptions} placeholder={t('selectRole')} />
      </Form.Item>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
