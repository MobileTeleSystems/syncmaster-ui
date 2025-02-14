import { Button, Form } from 'antd';
import React, { memo, useLayoutEffect } from 'react';

import { Transformations, TransformationType } from '../../types';

import { FilterRowsItem } from './components';

export const FilterRows = memo(() => {
  const formInstance = Form.useFormInstance();
  const filterRowsValues: Transformations[0]['filters'] | undefined = formInstance.getFieldValue([
    'transformations',
    TransformationType.ROWS_FILTER,
  ]);

  /** Add at least one element to array form value here,
   * because it is inconvenient to check for the presence of a default value of this array,
   * when forming a request to backend or initial form values */
  useLayoutEffect(() => {
    if (!filterRowsValues || !filterRowsValues.length) {
      formInstance.setFieldValue(['transformations', TransformationType.ROWS_FILTER], [{}]);
    }
  }, [formInstance, filterRowsValues]);

  return (
    <Form.List name={['transformations', TransformationType.ROWS_FILTER]}>
      {(fields, { add, remove }) => (
        <div>
          {fields.map((field) => (
            <FilterRowsItem {...field} onRemove={field.name ? remove : undefined} key={field.key} />
          ))}
          <Button className="nodrag" size="large" type="primary" onClick={() => add()}>
            Add column
          </Button>
        </div>
      )}
    </Form.List>
  );
});
