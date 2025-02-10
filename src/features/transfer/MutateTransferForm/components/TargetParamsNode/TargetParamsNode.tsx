import React, { useMemo } from 'react';
import { CanvasNode } from '@shared/ui';
import { Handle, Position } from '@xyflow/react';
import { Form } from 'antd';
import { CONNECTION_ICONS } from '@entities/connection';
import { ConnectionType } from '@shared/types';

import { TargetParams } from '../TargetParams';
import { TransferCanvasEdge } from '../TransferConnectionsCanvas';

import { TargetParamsNodeProps } from './types';

export const TargetParamsNode = ({ data }: TargetParamsNodeProps) => {
  const connectionType = Form.useWatch<ConnectionType>(['target_params', 'type']);

  const icon = useMemo(() => {
    return CONNECTION_ICONS[connectionType];
  }, [connectionType]);

  const children = useMemo(() => {
    return (
      <>
        <Handle type="target" position={Position.Left} id={TransferCanvasEdge.TARGET} />
        <TargetParams groupId={data.groupId} />
      </>
    );
  }, [data.groupId]);

  return (
    <CanvasNode title="Target" icon={icon}>
      {children}
    </CanvasNode>
  );
};
