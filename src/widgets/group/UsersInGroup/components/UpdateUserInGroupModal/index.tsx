import React, { memo } from 'react';
import { Modal } from 'antd';
import { UpdateUserInGroup } from '@features/group';
import { DEFAULT_MODAL_WIDTH } from '@shared/constants';

import { UpdateUserInGroupModalProps } from './types';

export const UpdateUserInGroupModal = memo(({ groupId, user, onClose, ...props }: UpdateUserInGroupModalProps) => {
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
      <UpdateUserInGroup groupId={groupId} user={user} onSuccess={onClose} onCancel={onClose} />
    </Modal>
  );
});
