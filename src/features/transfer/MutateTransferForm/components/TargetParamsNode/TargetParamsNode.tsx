import React, { useMemo } from 'react';
import { CanvasNode } from '@shared/ui';
import { Handle, Position } from '@xyflow/react';
import { Form } from 'antd';
import { CONNECTION_ICONS } from '@entities/connection';
import { ConnectionType } from '@shared/types';
import { useTranslation } from 'react-i18next';

import { TargetParams } from '../TargetParams';
import { TransferCanvasEdge } from '../TransferConnectionsCanvas';

import { TargetParamsNodeProps } from './types';
import * as classes from './styles.module.less';

export const TargetParamsNode = ({ data }: TargetParamsNodeProps) => {
  const { t } = useTranslation('transfer');
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
    <CanvasNode className={classes.root} title={t('target')} icon={icon}>
      {children}
    </CanvasNode>
  );
};
