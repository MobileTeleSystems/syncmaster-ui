import React from 'react';
import { ControlButtons } from '@shared/ui';
import { Typography } from 'antd';
import { useDeleteGroupUser } from '@entities/group';
import { WarningOutlined } from '@ant-design/icons';
import { Trans, useTranslation } from 'react-i18next';

import classes from './styles.module.less';
import { DeleteGroupUserProps } from './types';

const { Text } = Typography;

export const DeleteGroupUser = ({ groupId, user, onSuccess, onCancel }: DeleteGroupUserProps) => {
  const { t } = useTranslation('group');
  const { mutate: deleteUser, isPending } = useDeleteGroupUser({ groupId, userId: user.id });

  const handleSubmit = () => {
    deleteUser(null, { onSuccess });
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <WarningOutlined className={classes.icon} />
        <Text>
          <Trans
            t={t}
            i18nKey="deleteUserFromGroupConfirm"
            values={{ username: user.username }}
            components={[<b key="b" />]}
          />
        </Text>
      </div>
      <ControlButtons
        isLoading={isPending}
        submitButtonText={t('confirm', { ns: 'shared' })}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    </div>
  );
};
