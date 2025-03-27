import React from 'react';
import { AddGroupUser } from '@features/group';
import { DEFAULT_MODAL_WIDTH } from '@shared/constants';
import { ModalWrapper } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { AddGroupUserModalProps } from './types';

export const AddGroupUserModal = ({ groupId, onClose, ...props }: AddGroupUserModalProps) => {
  const { t } = useTranslation('group');

  return (
    <ModalWrapper title={t('addUserToGroup')} width={DEFAULT_MODAL_WIDTH} onCancel={onClose} {...props}>
      <AddGroupUser groupId={groupId} onSuccess={onClose} onCancel={onClose} />
    </ModalWrapper>
  );
};
