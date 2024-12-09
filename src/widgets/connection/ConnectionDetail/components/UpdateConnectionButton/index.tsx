import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { UpdateConnectionButtonProps } from './types';

export const UpdateConnectionButton = ({ connectionId }: UpdateConnectionButtonProps) => {
  return (
    <Button type="primary" size="large">
      <Link to={`/connections/${connectionId}/update`}>Update Connection</Link>
    </Button>
  );
};
