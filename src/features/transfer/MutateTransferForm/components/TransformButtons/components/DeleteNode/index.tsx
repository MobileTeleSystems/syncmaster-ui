import React from 'react';
import { ControlButtons } from '@shared/ui';
import { Typography } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { TRANSFER_CANVAS_TRANSFORM_NODE_TYPE_NAME_DISPLAY } from '../../../TransferConnectionsCanvas';

import { DeleteNodeProps } from './types';
import classes from './styles.module.less';

const { Text } = Typography;

export const DeleteNode = ({ nodeType, onConfirm, onCancel }: DeleteNodeProps) => {
  const { t } = useTranslation('transformation');

  const handleConfirm = () => {
    onConfirm(nodeType);
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <WarningOutlined className={classes.icon} />
        <Text>
          {t('deleteNodeConfirm')} <b>{t(TRANSFER_CANVAS_TRANSFORM_NODE_TYPE_NAME_DISPLAY[nodeType])}</b>?
        </Text>
      </div>
      <ControlButtons submitButtonText={t('confirm', { ns: 'shared' })} onSubmit={handleConfirm} onCancel={onCancel} />
    </div>
  );
};
