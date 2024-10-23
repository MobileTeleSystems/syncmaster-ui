import React, { memo } from 'react';
import { AddGroupUser } from '@features/group';
import { DEFAULT_MODAL_WIDTH } from '@shared/constants';
import { ModalWrapper } from '@shared/ui';

import { AddGroupUserModalProps } from './types';

export const AddGroupUserModal = memo(({ groupId, onClose, ...props }: AddGroupUserModalProps) => {
  return (
    <ModalWrapper title="Add user to group" width={DEFAULT_MODAL_WIDTH} onCancel={onClose} {...props}>
      <AddGroupUser groupId={groupId} onSuccess={onClose} onCancel={onClose} />
    </ModalWrapper>
  );
});
