import React from 'react';
import { ActionButton } from '@shared/ui';

import { UpdateTransferButtonProps } from './types';

export const UpdateTransferButton = ({ transferId }: UpdateTransferButtonProps) => {
  return <ActionButton actionType="edit" to={`/transfers/${transferId}/update`} />;
};
