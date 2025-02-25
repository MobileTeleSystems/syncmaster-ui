import { Button, Form } from 'antd';
import React, { memo, useLayoutEffect } from 'react';

import { Transformations, TransformationType } from '../../types';

import { TransformationFormItem } from './components';
import { TransformationFormProps } from './types';

const TransformationFormComponent = <T extends TransformationType>({
  transformationType,
  ...props
}: TransformationFormProps<T>) => {
  const formInstance = Form.useFormInstance();
  const filtersValues: Transformations[number]['filters'] | undefined = formInstance.getFieldValue([
    'transformations',
    transformationType,
  ]);

  /** Add at least one element to array form value here,
   * because it is inconvenient to check for the presence of a default value of this array,
   * when forming a request to backend or initial form values */
  useLayoutEffect(() => {
    if (!filtersValues || !filtersValues.length) {
      formInstance.setFieldValue(['transformations', transformationType], [{}]);
    }
  }, [formInstance, filtersValues, transformationType]);

  return (
    <Form.List name={['transformations', transformationType]}>
      {(fields, { add, remove }) => (
        <div>
          {fields.map((field) => (
            <TransformationFormItem
              {...field}
              {...props}
              transformationType={transformationType}
              onRemove={field.name ? remove : undefined}
              key={field.key}
            />
          ))}
          <Button className="nodrag" size="large" type="primary" onClick={() => add()}>
            Add item
          </Button>
        </div>
      )}
    </Form.List>
  );
};

export const TransformationForm = memo(TransformationFormComponent) as typeof TransformationFormComponent;
