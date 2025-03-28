import React, { memo } from 'react';
import { Badge } from 'antd';
import { RUN_STATUS_DISPLAY } from '@entities/run';
import { useTranslation } from 'react-i18next';

import { RunStatusBadgeProps } from './types';
import { getRunStatusColor } from './utils';

export const RunStatusBadge = memo(({ status }: RunStatusBadgeProps) => {
  const { t } = useTranslation('run');
  const statusText = t(RUN_STATUS_DISPLAY[status]);

  return <Badge count={statusText} status={getRunStatusColor(status)} />;
});
