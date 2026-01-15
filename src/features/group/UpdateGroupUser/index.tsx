import React from 'react';
import { ControlButtons, ManagedForm, Select } from '@shared/ui';
import { Form, Typography } from 'antd';
import { GroupQueryKey, groupService, useGetUserRoleInGroupSelectOptions } from '@entities/group';
import { useTranslation } from 'react-i18next';

import { UpdateGroupUserForm, UpdateGroupUserProps } from './types';
import { getUpdateGroupUserInitialValues } from './utils';
import * as classes from './styles.module.less';

const { Text } = Typography;

export const UpdateGroupUser = ({ groupId, user, onSuccess, onCancel }: UpdateGroupUserProps) => {
  const { t } = useTranslation('group');
  const userRoleInGroupSelectOptions = useGetUserRoleInGroupSelectOptions();

  const handleUpdateGroupUser = (values: UpdateGroupUserForm) => {
    return groupService.updateGroupUser({ ...values, groupId, userId: user.id });
  };

  return (
    <ManagedForm<UpdateGroupUserForm, null>
      initialValues={getUpdateGroupUserInitialValues(user)}
      mutationFunction={handleUpdateGroupUser}
      onSuccess={onSuccess}
      successMessage={t('updateUserRoleSuccess')}
      keysInvalidateQueries={[[{ queryKey: [GroupQueryKey.GET_GROUP_USERS, groupId] }]]}
    >
      <div className={classes.formMain}>
        <Text className={classes.username}>
          {t('username', { ns: 'auth' })}: <b>«{user.username}»</b>
        </Text>

        <Form.Item label={t('role')} name="role" rules={[{ required: true }]}>
          <Select size="large" options={userRoleInGroupSelectOptions} placeholder={t('selectRole')} />
        </Form.Item>
      </div>

      <ControlButtons onCancel={onCancel} />
    </ManagedForm>
  );
};
