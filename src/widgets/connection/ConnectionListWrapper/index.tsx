import React from 'react';
import { ConnectionList } from '@features/connection';

import { ConnectionListWrapperProps } from './types';

export const ConnectionListWrapper = ({ group }: ConnectionListWrapperProps) => {
  //TODO: [DOP-20043] add update and delete actions for connection
  return <ConnectionList group={group} />;
};
