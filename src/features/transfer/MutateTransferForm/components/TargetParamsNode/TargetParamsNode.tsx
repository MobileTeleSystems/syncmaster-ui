import React from 'react';

import { TargetParams } from '../TargetParams';

import { TargetParamsNodeProps } from './types';

export const TargetParamsNode = ({ data }: TargetParamsNodeProps) => {
  return <TargetParams groupId={data.groupId} initialTargetConnectionType={data.initialTargetConnectionType} />;
};
