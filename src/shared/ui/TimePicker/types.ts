import { PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import { Dayjs } from 'dayjs';

export interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {}
