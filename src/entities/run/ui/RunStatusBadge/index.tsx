import React, { memo } from 'react';
import { Badge } from 'antd';
import { RUN_STATUS_DISPLAY } from '@entities/run';

import { RunStatusBadgeProps } from './types';
import { getRunStatusColor } from './utils';

export const RunStatusBadge = memo(({ status }: RunStatusBadgeProps) => {
  const statusText = RUN_STATUS_DISPLAY[status];
  return <Badge count={statusText} status={getRunStatusColor(status)} />;
});
