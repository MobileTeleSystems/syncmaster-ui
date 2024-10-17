import { ConfigProvider } from 'antd';
import React, { PropsWithChildren } from 'react';

import { VALIDATE_MESSAGES } from './constants';

export const AntdConfigProvider = ({ children }: PropsWithChildren) => {
  return <ConfigProvider form={{ validateMessages: VALIDATE_MESSAGES }}>{children}</ConfigProvider>;
};
