import React from 'react';
import { ActionButton } from '@shared/ui';

import { UpdateConnectionButtonProps } from './types';

export const UpdateConnectionButton = ({ connectionId }: UpdateConnectionButtonProps) => {
  return <ActionButton actionType="edit" to={`/connections/${connectionId}/update`} />;
};
