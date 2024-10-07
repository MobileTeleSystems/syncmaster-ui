import React, { memo, useState } from 'react';
import { Form, notification, Spin } from 'antd';
import { PropsWithChildren } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { isErrorFormFields, isErrorMessage } from '@shared/guards';
import { clsx } from 'clsx';

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
  const [isSubmitting, setSubmitting] = useState(false);
  const queryClient = useQueryClient();

  const { mutate } = useMutation<R, AxiosError, T>({ mutationFn: mutationFunction });

  const onFinish = (values: T) => {
    setSubmitting(true);
    mutate(values, {
      onSuccess: (response) => {
        onSuccess(response);
        keysInvalidateQueries.forEach((params) => {
          queryClient.invalidateQueries(...params);
        });
        if (isHiddenLoadingOnSuccess) {
          setSubmitting(false);
        }
      },
      onError: (error) => {
        onError(error);
        setSubmitting(false);
        let message = 'An unexpected error occurred';

        if (error.response && isErrorFormFields(error)) {
          message = 'Form error has occurred';
          const fieldErrors = error.response.data.error.details.map((field) => ({
            name: field.location[1],
            errors: [field.message],
          }));
          form.setFields(fieldErrors);
        } else if (error.response && isErrorMessage(error)) {
          message = error.response.data.error.message;
        } else {
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
    <div className={classes.root} data-loading={isSubmitting}>
      <Spin className={classes.root__loader} size="default" />
      <Form
        onValuesChange={onValuesChange}
        layout="vertical"
        className={clsx(classes.root__form, props.className)}
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
