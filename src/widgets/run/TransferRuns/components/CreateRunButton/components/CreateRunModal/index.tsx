import React from 'react';
import { DEFAULT_MODAL_WIDTH } from '@shared/constants';
import { ModalWrapper } from '@shared/ui';

import { CreateRunModalProps } from './types';

export const CreateRunModal = ({ transferId, transferName, onClose, ...props }: CreateRunModalProps) => {
  return (
    <ModalWrapper title="Run transfer" width={DEFAULT_MODAL_WIDTH} onCancel={onClose} {...props}>
      {/* //TODO: [DOP-20067] add create run modal */}
      {/* <CreateRun transferId={transferId} transferName={transferName} onSuccess={onClose} onCancel={onClose} /> */}
    </ModalWrapper>
  );
};
