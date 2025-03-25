import React from 'react';
import { ControlButtons } from '@shared/ui';
import { Typography } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
import { useCreateRun } from '@entities/run';
import { useTranslation } from 'react-i18next';

import classes from './styles.module.less';
import { CreateRunProps } from './types';

const { Text } = Typography;

export const CreateRun = ({ transferId, transferName, onSuccess, onCancel }: CreateRunProps) => {
  const { t } = useTranslation('run');

  const { mutate: createRun, isPending } = useCreateRun({ transfer_id: transferId });

  const handleSubmit = () => {
    createRun(null, { onSuccess });
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <WarningOutlined className={classes.icon} />
        <Text>
          {t('runTransferConfirm')} <b>«{transferName}»</b>?
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
