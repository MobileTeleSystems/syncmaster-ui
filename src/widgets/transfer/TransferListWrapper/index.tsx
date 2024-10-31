import React from 'react';
import { TransferList } from '@features/transfer';

import { TransferListWrapperProps } from './types';

export const TransferListWrapper = ({ group }: TransferListWrapperProps) => {
  //TODO: [DOP-20065] add update and delete actions for transfer
  return <TransferList group={group} />;
};
