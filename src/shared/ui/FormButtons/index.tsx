import { Button, Form } from 'antd';
import React, { memo } from 'react';

import classes from './styles.module.less';
import { FormButtonsProps } from './types';

/** Component of buttons in form */
export const FormButtons = memo(
  ({
    onCancel = () => undefined,
    submitButtonText = 'Submit',
    cancelButtonText = 'Cancel',
    isHiddenCancelButton = false,
  }: FormButtonsProps) => {
    return (
      <Form.Item className={classes.root}>
        <div className={classes.root__buttons}>
          {!isHiddenCancelButton && (
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
  },
);
