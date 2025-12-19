import { memo, useState } from 'react';
import { Typography } from 'antd';
import { useModalState } from '@shared/hooks';
import { ModalWrapper } from '@shared/ui';
import { DEFAULT_MODAL_DELETE_WIDTH } from '@shared/constants';
import { useTranslation } from 'react-i18next';

import {
  TransferCanvasTransformNodeType,
  TRANSFER_CANVAS_TRANSFORM_NODE_TYPE_NAME_DISPLAY,
  TRANSFER_CANVAS_NODE_TYPE_TO_TRANSFORM_TYPE_MAP,
} from '../TransferConnectionsCanvas';
import { useSupportedTransformationTypes } from '../../hooks';

import { useHandleNodes } from './hooks';
import { DeleteNode, TransformButtonItem } from './components';
import classes from './styles.module.less';

const { Text } = Typography;

export const TransformButtons = memo(() => {
  const { t } = useTranslation('transformation');
  const { transformNodeTypes, handleAddTransformNode, handleDeleteTransformNode } = useHandleNodes();

  const { supportedTransformationTypes } = useSupportedTransformationTypes();

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
      <Text strong>{t('transformations')}</Text>
      <div className={classes.buttons}>
        {Object.values(TransferCanvasTransformNodeType)
          .filter((item) =>
            supportedTransformationTypes.includes(TRANSFER_CANVAS_NODE_TYPE_TO_TRANSFORM_TYPE_MAP[item]),
          )
          .map((item) => (
            <TransformButtonItem
              nodeType={item}
              isExist={transformNodeTypes ? !!transformNodeTypes[item] : false}
              onAddNode={handleAddTransformNode}
              onDeleteNode={handleOpenDeleteNodeModal}
              key={item}
            />
          ))}
      </div>
      {nodeTypeForDeleting && (
        <ModalWrapper
          title={`${t('confirm', { ns: 'shared' })} ${t(TRANSFER_CANVAS_TRANSFORM_NODE_TYPE_NAME_DISPLAY[nodeTypeForDeleting])}`}
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
