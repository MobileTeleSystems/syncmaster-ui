import React, { memo } from 'react';
import { UpdateGroupUser } from '@features/group';
import { DEFAULT_MODAL_WIDTH } from '@shared/constants';
import { ModalWrapper } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { UpdateGroupUserModalProps } from './types';

export const UpdateGroupUserModal = memo(({ groupId, user, onClose, ...props }: UpdateGroupUserModalProps) => {
  const { t } = useTranslation('group');

  if (!user) {
    return null;
  }

  return (
    <ModalWrapper title={t('updateUserInGroup')} width={DEFAULT_MODAL_WIDTH} onCancel={onClose} {...props}>
      <UpdateGroupUser groupId={groupId} user={user} onSuccess={onClose} onCancel={onClose} />
    </ModalWrapper>
  );
});
