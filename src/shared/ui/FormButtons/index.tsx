import { Button, Form } from 'antd';
import React from 'react';

import classes from './styles.module.less';
import { FormButtonsProps } from './types';

/** Component of buttons in form */
export const FormButtons = ({
  onCancel = () => undefined,
  submitButtonText = 'Submit',
  cancelButtonText = 'Cancel',
  isCancelButtonHidden = false,
}: FormButtonsProps) => {
  return (
    <Form.Item className={classes.wrapper}>
      <div className={classes.buttons}>
        {!isCancelButtonHidden && (
          <Button type="default" size="large" onClick={onCancel}>
            {cancelButtonText}
          </Button>
        )}
        <Button type="primary" size="large" htmlType="submit">
          {submitButtonText}
        </Button>
      </div>
    </Form.Item>
  );
};
