import React, { memo } from 'react';
import { Modal } from 'antd';
import { AddGroupUser } from '@features/group';
import { DEFAULT_MODAL_WIDTH } from '@shared/constants';

import { AddGroupUserModalProps } from './types';

export const AddGroupUserModal = memo(({ groupId, onClose, ...props }: AddGroupUserModalProps) => {
  return (
    <Modal
      title="Add user to group"
      centered
      footer={false}
      width={DEFAULT_MODAL_WIDTH}
      onCancel={onClose}
      destroyOnClose
      {...props}
    >
      <AddGroupUser groupId={groupId} onSuccess={onClose} onCancel={onClose} />
    </Modal>
  );
});
