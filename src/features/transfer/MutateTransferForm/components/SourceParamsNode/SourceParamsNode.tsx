import React from 'react';

import { SourceParams } from '../SourceParams';

import { SourceParamsNodeProps } from './types';

export const SourceParamsNode = ({ data }: SourceParamsNodeProps) => {
  return <SourceParams groupId={data.groupId} initialSourceConnectionType={data.initialSourceConnectionType} />;
};
