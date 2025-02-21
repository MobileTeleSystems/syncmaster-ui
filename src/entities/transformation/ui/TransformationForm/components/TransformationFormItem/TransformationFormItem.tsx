import { Button, Form, Input } from 'antd';
import React, { useMemo, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Select } from '@shared/ui';

import { TransformationsFormNestedType, TransformationType } from '../../../../types';
import { FilterComponent } from '../FilterComponent';

import { TransformationFormItemProps } from './types';
import { NESTED_TYPES_SELECT_OPTIONS } from './constants';
import classes from './styles.module.less';

export const TransformationFormItem = <T extends TransformationType>({
  name,
  transformationType,
  nestedTypeSelectLabel,
  hasColumnField,
  onRemove,
}: TransformationFormItemProps<T>) => {
  const formInstance = Form.useFormInstance();

  const initialType: TransformationsFormNestedType<T> | undefined = useMemo(() => {
    return formInstance.getFieldValue(['transformations', transformationType, name, 'type']);
  }, [formInstance, name, transformationType]);

  /** Use custom type state, because Form.useWatch doesn't support dynamic fieldname like in Form.List */
  const [type, setType] = useState(() => initialType);

  const handleRemove = () => {
    onRemove?.(name);
  };

  return (
    <div className={classes.root}>
      {hasColumnField && (
        <Form.Item className={classes.column} label="Column" name={[name, 'field']} rules={[{ required: true }]}>
          <Input className="nodrag" size="large" />
        </Form.Item>
      )}
      <Form.Item
        className={classes.type}
        label={nestedTypeSelectLabel}
        name={[name, 'type']}
        rules={[{ required: true }]}
      >
        <Select
          /** className "nodrag" and "nowheel" for select in custom node React Flow https://reactflow.dev/api-reference/react-flow#no-drag-class-name */
          className="nodrag"
          popupClassName="nowheel"
          size="large"
          options={NESTED_TYPES_SELECT_OPTIONS[transformationType]}
          onChange={setType}
          placeholder="Select type"
        />
      </Form.Item>
      <FilterComponent name={name} nestedType={type} transformationType={transformationType} />
      {onRemove && (
        <Button className="nodrag" type="primary" danger onClick={handleRemove}>
          <DeleteOutlined />
        </Button>
      )}
    </div>
  );
};
