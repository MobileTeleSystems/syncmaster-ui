import { Button, Form } from 'antd';
import React from 'react';

import classes from './styles.module.less';
import { ControlButtonsProps } from './types';

/** Component of buttons in forms and modals */
export const ControlButtons = ({
  isLoading = false,
  submitButtonText = 'Submit',
  cancelButtonText = 'Cancel',
  isCancelButtonHidden = false,
  onSubmit = () => undefined,
  onCancel = () => undefined,
}: ControlButtonsProps) => {
  return (
    <Form.Item className={classes.wrapper}>
      <div className={classes.buttons}>
        {!isCancelButtonHidden && (
          <Button type="default" size="large" disabled={isLoading} onClick={onCancel}>
            {cancelButtonText}
          </Button>
        )}
        <Button type="primary" size="large" htmlType="submit" loading={isLoading} onClick={onSubmit}>
          {submitButtonText}
        </Button>
        <Button type="primary" size="large" htmlType="submit" loading={isLoading} onClick={onSubmit}>
          {submitButtonText}
        </Button>
        <Button type="primary" size="large" htmlType="submit">
          {submitButtonText}
        </Button>
      </div>
    </Form.Item>
  );
};
