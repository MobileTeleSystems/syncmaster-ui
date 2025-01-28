import React, { useMemo } from 'react';
import { CanvasNode } from '@shared/ui';
import { Handle, Position } from '@xyflow/react';
import { Form } from 'antd';
import { CONNECTION_ICONS } from '@entities/connection';
import { ConnectionType } from '@shared/types';

import { SourceParams } from '../SourceParams';
import { TransferCanvasEdge } from '../TransferConnectionsCanvas';

import { SourceParamsNodeProps } from './types';

export const SourceParamsNode = ({ data }: SourceParamsNodeProps) => {
  const connectionType = Form.useWatch<ConnectionType>(['source_params', 'type']);

  const icon = useMemo(() => {
    return CONNECTION_ICONS[connectionType];
  }, [connectionType]);

  const children = useMemo(() => {
    return (
      <>
        <SourceParams groupId={data.groupId} initialSourceConnectionType={data.initialSourceConnectionType} />
        <Handle type="source" position={Position.Right} id={TransferCanvasEdge.SOURCE} />
      </>
    );
  }, [data.groupId, data.initialSourceConnectionType]);

  return (
    <CanvasNode title="Source" icon={icon}>
      {children}
    </CanvasNode>
  );
};
