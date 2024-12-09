import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { UpdateTransferButtonProps } from './types';

export const UpdateTransferButton = ({ transferId }: UpdateTransferButtonProps) => {
  return (
    <Button type="primary" size="large">
      <Link to={`/transfers/${transferId}/update`}>Update Transfer</Link>
    </Button>
  );
};
