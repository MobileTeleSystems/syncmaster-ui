import React, { memo } from 'react';
import { DeleteGroupUser } from '@features/group';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { ModalWrapper } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { DeleteGroupUserModalProps } from './types';

export const DeleteGroupUserModal = memo(({ groupId, user, onClose, ...props }: DeleteGroupUserModalProps) => {
  const { t } = useTranslation('group');

  if (!user) {
    return null;
  }

  return (
    <ModalWrapper title={t('deleteUserFromGroup')} width={DEFAULT_MODAL_DELETE_WIDTH} onCancel={onClose} {...props}>
      <DeleteGroupUser groupId={groupId} user={user} onSuccess={onClose} onCancel={onClose} />
    </ModalWrapper>
  );
});
