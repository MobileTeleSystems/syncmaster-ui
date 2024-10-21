import React, { memo } from 'react';
import { Modal } from 'antd';
import { UpdateGroupUser } from '@features/group';
import { DEFAULT_MODAL_WIDTH } from '@shared/constants';

import { UpdateGroupUserModalProps } from './types';

export const UpdateGroupUserModal = memo(({ groupId, user, onClose, ...props }: UpdateGroupUserModalProps) => {
  if (!user) {
    return null;
  }

  return (
    <Modal
      title="Update user in group"
      centered
      footer={false}
      width={DEFAULT_MODAL_WIDTH}
      onCancel={onClose}
      destroyOnClose
      {...props}
    >
      <UpdateGroupUser groupId={groupId} user={user} onSuccess={onClose} onCancel={onClose} />
    </Modal>
  );
});
