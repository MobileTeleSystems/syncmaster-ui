import React, { useState } from 'react';
import { Form, notification, Spin } from 'antd';
import { PropsWithChildren } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { clsx } from 'clsx';
import { checkIsFormFieldsError, getErrorMessage } from '@shared/config';

import classes from './styles.module.less';
import { ManagedFormProps } from './types';
import { cleanErrors, showErrorsInFields } from './utils';

/** Form component to manage the request and results of a form request */
export const ManagedForm = <T extends object, R>({
  children,
  mutationFunction,
  onSuccess,
  successMessage,
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
      onSuccess: async (response) => {
        await Promise.all(keysInvalidateQueries.map((params) => queryClient.invalidateQueries(...params)));
        onSuccess(response);

        if (isHiddenLoadingOnSuccess) {
          setLoading(false);
        }
        if (successMessage) {
          notification.success({
            message: successMessage,
          });
        }
      },
      onError: (error) => {
        onError(error);
        setLoading(false);
        let message = getErrorMessage(error);

        if (checkIsFormFieldsError(error) && error.response) {
          message = 'Form error has occurred';
          showErrorsInFields(form, error.response.data.error.details);
        }

        notification.error({
          message,
        });
      },
    });
  };

  const onValuesChange = (values: T) => {
    cleanErrors(form, values);
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
