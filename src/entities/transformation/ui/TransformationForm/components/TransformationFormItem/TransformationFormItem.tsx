import { Button, Form, Input } from 'antd';
import { useMemo, useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Select } from '@shared/ui';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import {
  TransformationsFormNestedType,
  TransformationsFormWithNestedType,
  TransformationType,
} from '../../../../types';
import { FilterComponent } from '../FilterComponent';
import { FilterSql } from '../FilterSql';

import { TransformationFormItemProps } from './types';
import { useGetNestedTypesSelectOptions } from './hooks';
import * as classes from './styles.module.less';
import { SQL_AUTO_HEIGHT_MAX_LINE_COUNT } from './constants';

export const TransformationFormItem = <T extends TransformationType>({
  name,
  transformationType,
  nestedTypeSelectLabel,
  hasColumnField,
  hasNestedTypeSelectField,
  hasFilterComponent,
  hasSqlField,
  onRemove,
}: TransformationFormItemProps<T>) => {
  const { t } = useTranslation('transformation');
  const nestedTypesSelectOptions = useGetNestedTypesSelectOptions(
    transformationType as TransformationsFormWithNestedType,
  );
  const formInstance = Form.useFormInstance();

  const initialType = useMemo(() => {
    if (!hasNestedTypeSelectField) return undefined;

    return formInstance.getFieldValue([
      'transformations',
      transformationType as TransformationsFormWithNestedType,
      name,
      'type',
    ]) as TransformationsFormNestedType<TransformationsFormWithNestedType>;
  }, [formInstance, hasNestedTypeSelectField, name, transformationType]);

  /** Use custom type state, because Form.useWatch doesn't support dynamic fieldname like in Form.List */
  const [type, setType] = useState(() => initialType);

  const handleRemove = () => {
    onRemove?.(name);
  };

  return (
    <div className={classes.root}>
      {hasColumnField && (
        <Form.Item className={classes.column} label={t('column')} name={[name, 'field']} rules={[{ required: true }]}>
          <Input className="nodrag" size="large" />
        </Form.Item>
      )}
      {hasFilterComponent && (
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
            options={nestedTypesSelectOptions}
            onChange={setType}
            placeholder={t('selectOption')}
          />
        </Form.Item>
      )}
      {hasNestedTypeSelectField && (
        <FilterComponent
          name={name}
          nestedType={type}
          transformationType={transformationType as TransformationsFormWithNestedType}
        />
      )}
      {hasSqlField && (
        <Form.Item className={classes.sql} label={t('query')} name={[name, 'query']} rules={[{ required: true }]}>
          <FilterSql autoHeightMaxLineCount={SQL_AUTO_HEIGHT_MAX_LINE_COUNT} />
        </Form.Item>
      )}
      {onRemove && (
        <Button
          className={clsx('nodrag', [classes.deleteButton])}
          type="primary"
          size="large"
          danger
          onClick={handleRemove}
        >
          <DeleteOutlined />
        </Button>
      )}
    </div>
  );
};
