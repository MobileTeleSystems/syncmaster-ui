import React, { memo } from 'react';
import { Modal } from 'antd';
import { AddUserToGroup } from '@features/group';
import { DEFAULT_MODAL_WIDTH } from '@shared/constants';

import { AddUserToGroupModalProps } from './types';

export const AddUserToGroupModal = memo(({ groupId, onClose, ...props }: AddUserToGroupModalProps) => {
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
      <AddUserToGroup groupId={groupId} onSuccess={onClose} onCancel={onClose} />
    </Modal>
  );
});
