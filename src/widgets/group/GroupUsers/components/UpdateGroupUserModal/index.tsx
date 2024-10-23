import React, { memo } from 'react';
import { UpdateGroupUser } from '@features/group';
import { DEFAULT_MODAL_WIDTH } from '@shared/constants';
import { ModalWrapper } from '@shared/ui';

import { UpdateGroupUserModalProps } from './types';

export const UpdateGroupUserModal = memo(({ groupId, user, onClose, ...props }: UpdateGroupUserModalProps) => {
  if (!user) {
    return null;
  }

  return (
    <ModalWrapper title="Update user in group" width={DEFAULT_MODAL_WIDTH} onCancel={onClose} {...props}>
      <UpdateGroupUser groupId={groupId} user={user} onSuccess={onClose} onCancel={onClose} />
    </ModalWrapper>
  );
});
