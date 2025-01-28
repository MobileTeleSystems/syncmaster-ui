import React, { memo } from 'react';
import { Select as AntdSelect } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select';
import clsx from 'clsx';

import { SelectProps } from './types';
import classes from './styles.module.less';

const SelectComponent = <V, O extends BaseOptionType | DefaultOptionType>({
  className,
  ...props
}: SelectProps<V, O>) => {
  return (
    <AntdSelect
      className={clsx(classes.root, className)}
      getPopupContainer={(triggerNode) => triggerNode.parentElement!}
      {...props}
    />
  );
};

export const Select = memo(SelectComponent) as typeof SelectComponent;
