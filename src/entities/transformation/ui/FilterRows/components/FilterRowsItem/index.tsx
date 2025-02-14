import { Button, Form, Input } from 'antd';
import React, { useMemo, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Select } from '@shared/ui';

import { TransformationRowsFilter, TransformationRowsFilterType, TransformationType } from '../../../../types';
import { FilterRowsValue } from '../FilterRowsValue';

import { FilterRowsItemProps } from './types';
import classes from './styles.module.less';
import { FILTER_ROWS_TYPE_SELECT_OPTIONS } from './constants';

export const FilterRowsItem = ({ onRemove, name }: FilterRowsItemProps) => {
  const formInstance = Form.useFormInstance();

  const initialType = useMemo(() => {
    const filterRowsItems: TransformationRowsFilter['filters'][0] | undefined = formInstance.getFieldValue([
      'transformations',
      TransformationType.ROWS_FILTER,
      name,
    ]);

    return filterRowsItems?.type;
  }, [formInstance, name]);

  /** Use custom type state, because Form.useWatch doesn't support dynamic fieldname like in Form.List */
  const [type, setType] = useState(() => initialType);

  const handleChangeType = (newType: TransformationRowsFilterType) => {
    setType(newType);
  };

  const handleRemove = () => {
    onRemove?.(name);
  };

  return (
    <div className={classes.root}>
      <Form.Item className={classes.column} label="Column" name={[name, 'field']} rules={[{ required: true }]}>
        <Input className="nodrag" size="large" />
      </Form.Item>
      <Form.Item className={classes.type} label="Operator" name={[name, 'type']} rules={[{ required: true }]}>
        <Select
          /** className "nodrag" and "nowheel" for select in custom node React Flow https://reactflow.dev/api-reference/react-flow#no-drag-class-name */
          className="nodrag"
          popupClassName="nowheel"
          size="large"
          options={FILTER_ROWS_TYPE_SELECT_OPTIONS}
          onChange={handleChangeType}
          placeholder="Select type"
        />
      </Form.Item>
      <FilterRowsValue name={name} type={type} />
      {onRemove && (
        <Button className="nodrag" type="primary" danger onClick={handleRemove}>
          <DeleteOutlined />
        </Button>
      )}
    </div>
  );
};
