import { ConfigProvider } from 'antd';
import React, { memo, PropsWithChildren } from 'react';

import { VALIDATE_MESSAGES } from './constants';

export const AntdConfigProvider = memo(({ children }: PropsWithChildren) => {
  return <ConfigProvider form={{ validateMessages: VALIDATE_MESSAGES }}>{children}</ConfigProvider>;
});
