import { RunStatus } from '@entities/run';
import { BadgeProps } from 'antd';

/** Util for getting value of prop "status" for run status badge */
export const getRunStatusColor = (status: RunStatus): BadgeProps['status'] => {
  switch (status) {
    case RunStatus.CREATED:
      return 'default';
    case RunStatus.STARTED:
      return 'processing';
    case RunStatus.FAILED:
      return 'error';
    case RunStatus.SEND_STOP_SIGNAL:
    case RunStatus.STOPPED:
      return 'warning';
    case RunStatus.FINISHED:
      return 'success';
  }
};
