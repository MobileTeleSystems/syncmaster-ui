import React, { memo } from 'react';
import { Button, Typography } from 'antd';

import { TransferCanvasTransformNodeType } from '../TransferConnectionsCanvas';

import classes from './styles.module.less';
import { useHandleNodes } from './hooks';

const { Text } = Typography;

export const TransformButtons = memo(() => {
  const { transformNodeTypes, handleAddTransformNode } = useHandleNodes();

  return (
    <div className={classes.root}>
      <Text strong>You can add some data transforms:</Text>
      <div className={classes.buttons}>
        <Button
          type="primary"
          onClick={() => handleAddTransformNode(TransferCanvasTransformNodeType.FILTER_ROWS)}
          disabled={transformNodeTypes ? transformNodeTypes[TransferCanvasTransformNodeType.FILTER_ROWS] : false}
        >
          Filter rows
        </Button>
      </div>
    </div>
  );
});
