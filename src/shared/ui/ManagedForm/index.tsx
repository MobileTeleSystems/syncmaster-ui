import React, { memo, useState } from 'react';
import { Form, notification, Spin } from 'antd';
import { PropsWithChildren } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { clsx } from 'clsx';
import { checkIsFormFieldsError, checkIsMessageError } from '@shared/guards';

import classes from './styles.module.less';
import { ManagedFormProps } from './types';

/** Form component to manage the request and results of a form request */
const ManagedFormDefault = <T extends object, R extends object>({
  children,
  mutationFunction,
  onSuccess,
  keysInvalidateQueries = [],
  isHiddenLoadingOnSuccess = false,
  onError = () => undefined,
  ...props
}: PropsWithChildren<ManagedFormProps<T, R>>) => {
  const [form] = Form.useForm<T>();
  const [isLoading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const { mutate } = useMutation<R, unknown, T>({ mutationFn: mutationFunction });

  const onFinish = (values: T) => {
    setLoading(true);
    mutate(values, {
      onSuccess: (response) => {
        onSuccess(response);
        keysInvalidateQueries.forEach((params) => {
          queryClient.invalidateQueries(...params);
        });
        if (isHiddenLoadingOnSuccess) {
          setLoading(false);
        }
      },
      onError: (error) => {
        onError(error);
        setLoading(false);
        let message = 'An unexpected error occurred';

        if (checkIsFormFieldsError(error) && error.response) {
          message = 'Form error has occurred';
          const fieldErrors = error.response.data.error.details.map((field) => ({
            name: field.location[1],
            errors: [field.message],
          }));
          form.setFields(fieldErrors);
        } else if (checkIsMessageError(error) && error.response) {
          message = error.response.data.error.message;
        } else if (axios.isAxiosError(error)) {
          message = error.message;
        }
        notification.error({
          message,
        });
      },
    });
  };

  // Clean error from backend after field change value
  const onValuesChange = (values: T) => {
    Object.keys(values).forEach((field) => {
      const error = form.getFieldError(field);
      if (!error.length) {
        return;
      }
      form.setFields([
        {
          name: field,
          errors: [],
        },
      ]);
    });
  };

  return (
    <div className={classes.wrapper} data-loading={isLoading}>
      <Spin className={classes.loader} size="default" />
      <Form
        onValuesChange={onValuesChange}
        layout="vertical"
        className={clsx(classes.form, props.className)}
        form={form}
        onFinish={onFinish}
        {...props}
      >
        {children}
      </Form>
    </div>
  );
};

export const ManagedForm = memo(ManagedFormDefault) as typeof ManagedFormDefault;
