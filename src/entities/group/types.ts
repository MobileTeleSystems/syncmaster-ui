import { Group } from './api';

export interface SelectedGroupContextProps {
  group: Group | null;
  isLoading: boolean;
  selectGroup: (group: Group) => void;
  cleanGroup: () => void;
}
