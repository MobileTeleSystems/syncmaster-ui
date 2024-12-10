import React from 'react';
import { ModalWrapper } from '@shared/ui';
import { CreateRun } from '@features/run';

import { CreateRunModalProps } from './types';

export const CreateRunModal = ({ transferId, transferName, onClose, ...props }: CreateRunModalProps) => {
  return (
    <ModalWrapper title="Run Transfer" width={400} onCancel={onClose} {...props}>
      <CreateRun transferId={transferId} transferName={transferName} onSuccess={onClose} onCancel={onClose} />
    </ModalWrapper>
  );
};
