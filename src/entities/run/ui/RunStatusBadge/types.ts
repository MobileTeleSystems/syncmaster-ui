import { RunStatus } from '../../api';

export interface RunStatusBadgeProps {
  status: keyof typeof RunStatus;
}
