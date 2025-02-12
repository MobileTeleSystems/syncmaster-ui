import React, { memo, useState } from 'react';
import { Typography } from 'antd';
import { useModalState } from '@shared/hooks';
import { ModalWrapper } from '@shared/ui';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';

import { TransferCanvasTransformNodeType, TransferCanvasTransformNodeTypeName } from '../TransferConnectionsCanvas';

import { useHandleNodes } from './hooks';
import { DeleteNode, TransformButtonItem } from './components';
import classes from './styles.module.less';

const { Text } = Typography;

export const TransformButtons = memo(() => {
  const { transformNodeTypes, handleAddTransformNode, handleDeleteTransformNode } = useHandleNodes();

  const [nodeTypeForDeleting, setNodeTypeForDeleting] = useState<TransferCanvasTransformNodeType | null>(null);

  const { isOpened: isOpenedModal, handleOpen: openModal, handleClose: handleCloseModal } = useModalState();

  const handleOpenDeleteNodeModal = (nodeType: TransferCanvasTransformNodeType) => {
    setNodeTypeForDeleting(nodeType);
    openModal();
  };

  const handleDeleteNode = (nodeType: TransferCanvasTransformNodeType) => {
    handleDeleteTransformNode(nodeType);
    handleCloseModal();
  };

  return (
    <div className={classes.root}>
      <Text strong>Transformations controls:</Text>
      <div className={classes.buttons}>
        {Object.values(TransferCanvasTransformNodeType).map((item, index) => (
          <TransformButtonItem
            nodeType={item}
            isExist={transformNodeTypes ? transformNodeTypes[item] : false}
            onAddNode={handleAddTransformNode}
            onDeleteNode={handleOpenDeleteNodeModal}
            key={index}
          />
        ))}
      </div>
      {nodeTypeForDeleting && (
        <ModalWrapper
          title={`Delete ${TransferCanvasTransformNodeTypeName[nodeTypeForDeleting]}`}
          width={DEFAULT_MODAL_DELETE_WIDTH}
          open={isOpenedModal}
          onCancel={handleCloseModal}
        >
          <DeleteNode nodeType={nodeTypeForDeleting} onConfirm={handleDeleteNode} onCancel={handleCloseModal} />
        </ModalWrapper>
      )}
    </div>
  );
});
