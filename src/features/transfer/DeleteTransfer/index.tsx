import React from 'react';
import { ControlButtons } from '@shared/ui';
import { Typography } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { useDeleteTransfer } from '@entities/transfer';
import { useTranslation } from 'react-i18next';

import * as classes from './styles.module.less';
import { DeleteTransferProps } from './types';

const { Text } = Typography;

export const DeleteTransfer = ({ transfer, onSuccess, onCancel }: DeleteTransferProps) => {
  const { t } = useTranslation('transfer');
  const { mutate: deleteTransfer, isPending } = useDeleteTransfer({ id: transfer.id });

  const handleSubmit = () => {
    deleteTransfer(null, { onSuccess });
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <WarningOutlined className={classes.icon} />
        <Text>
          {t('deleteTransferConfirm')} <b>«{transfer.name}»</b>?
        </Text>
      </div>
      <ControlButtons
        isLoading={isPending}
        submitButtonText={t('confirm', { ns: 'shared' })}
        onSubmit={handleSubmit}
        onCancel={onCancel}
      />
    </div>
  );
};
