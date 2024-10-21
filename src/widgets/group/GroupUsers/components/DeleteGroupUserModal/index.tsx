import React, { memo } from 'react';
import { Modal } from 'antd';
import { DeleteGroupUser } from '@features/group';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';

import { DeleteGroupUserModalProps } from './types';

export const DeleteGroupUserModal = memo(({ groupId, user, onClose, ...props }: DeleteGroupUserModalProps) => {
  if (!user) {
    return null;
  }

  return (
    <Modal
      title="Delete user from group"
      centered
      footer={false}
      width={DEFAULT_MODAL_DELETE_WIDTH}
      onCancel={onClose}
      destroyOnClose
      {...props}
    >
      <DeleteGroupUser groupId={groupId} user={user} onSuccess={onClose} onCancel={onClose} />
    </Modal>
  );
});
