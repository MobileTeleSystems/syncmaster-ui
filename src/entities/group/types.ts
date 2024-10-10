import { Group } from './api';

export interface SelectedGroupContextProps {
  group: Group | null;
  selectGroup: (group: Group) => void;
}
