import { DatePicker } from '@shared/ui';
import React, { forwardRef } from 'react';

import { TimePickerProps } from './types';

// Use any in generic, cause it using in https://4x.ant.design/docs/react/replace-moment#TimePicker.tsx
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TimePicker = forwardRef<any, TimePickerProps>((props, ref) => {
  return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

TimePicker.displayName = 'TimePicker';
