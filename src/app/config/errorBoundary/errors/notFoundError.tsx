import React from 'react';
import { Result } from 'antd';

import { BackHome } from './backHome';

export const NotFoundError = () => {
  return (
    <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." extra={<BackHome />} />
  );
};
