import React, { memo } from 'react';
import { Badge } from 'antd';
import { RunStatus } from '@entities/run/api';

import { RunStatusBadgeProps } from './types';
import { getRunStatusColor } from './utils';

export const RunStatusBadge = memo(({ status }: RunStatusBadgeProps) => {
  const statusText = RunStatus[status];
  return <Badge count={statusText} status={getRunStatusColor(statusText)} />;
});
