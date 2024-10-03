import React, { memo } from 'react';
import { Result } from 'antd';

import { BackHome } from './BackHome';

export const NotFoundError = memo(() => {
  return (
    <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." extra={<BackHome />} />
  );
});
