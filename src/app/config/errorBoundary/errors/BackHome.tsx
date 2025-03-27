import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { isAuthenticated } from '../../router';
import { useErrorBoundaryContext } from '../hooks';

export const BackHome = () => {
  const { t } = useTranslation('error');
  const navigate = useNavigate();
  const { resetErrorBoundary } = useErrorBoundaryContext();

  const handleClick = () => {
    resetErrorBoundary();
    if (isAuthenticated()) {
      return navigate('/connections');
    }
    navigate('/login');
  };

  return (
    <Button type="primary" onClick={handleClick}>
      {t('backHome')}
    </Button>
  );
};
