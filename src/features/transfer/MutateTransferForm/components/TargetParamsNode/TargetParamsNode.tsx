import React, { useMemo } from 'react';
import { CanvasNode } from '@shared/ui';
import { Handle, Position } from '@xyflow/react';
import { Form } from 'antd';
import { ConnectionIcon } from '@entities/connection';

import { TargetParams } from '../TargetParams';
import { TransferCanvasEdge } from '../TransferConnectionsCanvas';

import { TargetParamsNodeProps } from './types';
import classes from './styles.module.less';

export const TargetParamsNode = ({ data }: TargetParamsNodeProps) => {
  const connectionType = Form.useWatch(['target_params', 'type']);

  const icon = useMemo(() => {
    return <ConnectionIcon type={connectionType} />;
  }, [connectionType]);

  const children = useMemo(() => {
    return (
      <>
        <Handle type="target" position={Position.Left} id={TransferCanvasEdge.TARGET} />
        <TargetParams groupId={data.groupId} initialTargetConnectionType={data.initialTargetConnectionType} />
      </>
    );
  }, [data.groupId, data.initialTargetConnectionType]);

  return (
    <CanvasNode className={classes.root} title="Target" icon={icon}>
      {children}
    </CanvasNode>
  );
};
