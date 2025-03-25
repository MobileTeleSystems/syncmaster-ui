import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { UpdateTransferButtonProps } from './types';

export const UpdateTransferButton = ({ transferId }: UpdateTransferButtonProps) => {
  const { t } = useTranslation('transfer');

  return (
    <Button type="primary" size="large">
      <Link to={`/transfers/${transferId}/update`}>{t('updateTransfer')}</Link>
    </Button>
  );
};
