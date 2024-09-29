import React from 'react';
import { Result } from 'antd';

import { BackHome } from './backHome';

export const ServerError = () => {
  return <Result status="500" title="500" subTitle="Sorry, something went wrong." extra={<BackHome />} />;
};
