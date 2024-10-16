import React, { memo } from 'react';
import { Modal } from 'antd';
import { DeleteUserFromGroup } from '@features/group';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';

import { DeleteUserFromGroupModalProps } from './types';

export const DeleteUserFromGroupModal = memo(({ groupId, user, onClose, ...props }: DeleteUserFromGroupModalProps) => {
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
      <DeleteUserFromGroup groupId={groupId} user={user} onSuccess={onClose} onCancel={onClose} />
    </Modal>
  );
});
