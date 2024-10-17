import { GroupFromList } from './api';

export interface SelectedGroupContextProps {
  group: GroupFromList | null;
  selectGroup: (group: GroupFromList) => void;
}
