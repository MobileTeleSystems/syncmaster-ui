import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { UpdateConnectionButtonProps } from './types';

export const UpdateConnectionButton = ({ connectionId }: UpdateConnectionButtonProps) => {
  const { t } = useTranslation('connection');

  return (
    <Button type="primary" size="large">
      <Link to={`/connections/${connectionId}/update`}>{t('updateConnection')}</Link>
    </Button>
  );
};
