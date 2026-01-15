import { Button, Form } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import * as classes from './styles.module.less';
import { ControlButtonsProps } from './types';

/** Component of buttons in forms and modals */
export const ControlButtons = ({
  isLoading = false,
  submitButtonText,
  cancelButtonText,
  isCancelButtonHidden = false,
  onSubmit = () => undefined,
  onCancel = () => undefined,
}: ControlButtonsProps) => {
  const { t } = useTranslation('shared');

  return (
    <Form.Item className={classes.wrapper}>
      <div className={classes.buttons}>
        {!isCancelButtonHidden && (
          <Button className={classes.button} type="default" size="large" disabled={isLoading} onClick={onCancel}>
            {cancelButtonText || t('cancel')}
          </Button>
        )}
        <Button
          className={classes.button}
          type="primary"
          size="large"
          htmlType="submit"
          loading={isLoading}
          onClick={onSubmit}
        >
          {submitButtonText || t('submit')}
        </Button>
      </div>
    </Form.Item>
  );
};
