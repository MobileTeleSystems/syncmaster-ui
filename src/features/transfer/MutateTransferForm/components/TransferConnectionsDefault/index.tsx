import React from 'react';
import { Fieldset } from '@shared/ui';

import { SourceParams } from '../SourceParams';
import { TargetParams } from '../TargetParams';

import { TransferConnectionsDefaultProps } from './types';

export const TransferConnectionsDefault = ({
  groupId,
  initialSourceConnectionType,
  initialTargetConnectionType,
}: TransferConnectionsDefaultProps) => {
  return (
    <>
      <Fieldset title="Source connection">
        <SourceParams groupId={groupId} initialSourceConnectionType={initialSourceConnectionType} />
      </Fieldset>
      <Fieldset title="Target connection">
        <TargetParams groupId={groupId} initialTargetConnectionType={initialTargetConnectionType} />
      </Fieldset>
    </>
  );
};
