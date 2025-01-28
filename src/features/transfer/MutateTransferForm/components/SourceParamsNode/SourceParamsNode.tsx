import React, { useMemo } from 'react';
import { CanvasNode } from '@shared/ui';
import { Handle, Position } from '@xyflow/react';
import { Form } from 'antd';
import { ConnectionIcon } from '@entities/connection';

import { SourceParams } from '../SourceParams';
import { TransferCanvasEdge } from '../TransferConnectionsCanvas';

import { SourceParamsNodeProps } from './types';
import classes from './styles.module.less';

export const SourceParamsNode = ({ data }: SourceParamsNodeProps) => {
  const connectionType = Form.useWatch(['source_params', 'type']);

  const icon = useMemo(() => {
    return <ConnectionIcon type={connectionType} />;
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
    <CanvasNode className={classes.root} title="Source" icon={icon}>
      {children}
    </CanvasNode>
  );
};
