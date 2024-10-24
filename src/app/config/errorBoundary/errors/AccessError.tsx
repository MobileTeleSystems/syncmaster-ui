import React from 'react';
import { Result } from 'antd';

import { BackHome } from './BackHome';

export const AccessError = () => {
  return <Result status="403" title="403" subTitle="Sorry, you don't have access to this page." extra={<BackHome />} />;
};
