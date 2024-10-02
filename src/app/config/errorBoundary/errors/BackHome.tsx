import React, { memo } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { isAuthenticated } from '../../router';
import { useErrorBoundaryContext } from '../hooks';

export const BackHome = memo(() => {
  const navigate = useNavigate();
  const { resetErrorBoundary } = useErrorBoundaryContext();

  const handleClick = () => {
    resetErrorBoundary();
    if (isAuthenticated()) {
      return navigate('/users');
    }
    navigate('/login');
  };

  return (
    <Button type="primary" onClick={handleClick}>
      Back Home
    </Button>
  );
});
