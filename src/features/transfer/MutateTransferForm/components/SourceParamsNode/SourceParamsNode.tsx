import React, { useMemo } from 'react';
import { CanvasNode } from '@shared/ui';
import { Handle, Position } from '@xyflow/react';
import { Form } from 'antd';
import { CONNECTION_ICONS } from '@entities/connection';
import { ConnectionType } from '@shared/types';
import { useTranslation } from 'react-i18next';

import { SourceParams } from '../SourceParams';
import { TransferCanvasEdge } from '../TransferConnectionsCanvas';

import { SourceParamsNodeProps } from './types';
import * as classes from './styles.module.less';

export const SourceParamsNode = ({ data }: SourceParamsNodeProps) => {
  const { t } = useTranslation('transfer');

  const connectionType = Form.useWatch<ConnectionType>(['source_params', 'type']);

  const icon = useMemo(() => {
    return CONNECTION_ICONS[connectionType];
  }, [connectionType]);

  const children = useMemo(() => {
    return (
      <>
        <SourceParams groupId={data.groupId} />
        <Handle type="source" position={Position.Right} id={TransferCanvasEdge.SOURCE} />
      </>
    );
  }, [data.groupId]);

  return (
    <CanvasNode className={classes.root} title={t('source')} icon={icon}>
      {children}
    </CanvasNode>
  );
};
