import React from 'react';
import { ModalWrapper } from '@shared/ui';
import { CreateRun } from '@features/run';
import { useTranslation } from 'react-i18next';

import { CreateRunModalProps } from './types';

export const CreateRunModal = ({ transferId, transferName, onClose, ...props }: CreateRunModalProps) => {
  const { t } = useTranslation('run');

  return (
    <ModalWrapper title={t('runTransfer')} width={400} onCancel={onClose} {...props}>
      <CreateRun transferId={transferId} transferName={transferName} onSuccess={onClose} onCancel={onClose} />
    </ModalWrapper>
  );
};
