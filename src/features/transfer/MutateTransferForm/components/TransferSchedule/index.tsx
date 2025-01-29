import { CronSelect, Fieldset } from '@shared/ui';
import { Form, Switch } from 'antd';
import React, { useState } from 'react';

import classes from './styles.module.less';

export const TransferSchedule = () => {
  const formInstance = Form.useFormInstance();
  const [isScheduled, setScheduled] = useState(() => formInstance.getFieldValue('is_scheduled'));

  const handleChangeScheduled = (value: boolean) => {
    setScheduled(value);
  };

  return (
    <Fieldset
      title="Schedule"
      headerSlot={
        <Form.Item className={classes.switch} name="is_scheduled" valuePropName="checked">
          <Switch onChange={handleChangeScheduled} />
        </Form.Item>
      }
      hasShowContent={isScheduled}
    >
      <Form.Item name="schedule" rules={[{ required: true }]}>
        <CronSelect />
      </Form.Item>
    </Fieldset>
  );
};
