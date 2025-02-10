import React from 'react';
import { Form, Switch } from 'antd';
import { Select } from '@shared/ui';
import { Typography } from 'antd';
import clsx from 'clsx';

import { FileCompressionProps } from './types';
import classes from './styles.module.less';

const { Text } = Typography;

export const FileCompression = <T,>({ name, options }: FileCompressionProps<T>) => {
  const fieldName = [...name, 'compression'];

  /* useWatch takes a value from Form.Item, but useFormInstance takes one from general form state
   * useWatch returns undefined when Form.Item has not rendered yet
   * https://github.com/ant-design/ant-design/issues/49010
   */
  Form.useWatch(fieldName);
  const formInstance = Form.useFormInstance();

  const toggleCompression = (value: boolean) => {
    if (value) {
      formInstance.setFieldValue(fieldName, undefined);
    } else {
      formInstance.setFieldValue(fieldName, 'none');
    }
  };

  const switchChecked = formInstance.getFieldValue(fieldName) !== 'none';

  const selectClassNames = clsx({
    nodrag: true,
    [classes.hidden]: !switchChecked,
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.switch}>
        <Text className={classes.label}>Compression</Text>
        <Switch className="nodrag" checked={switchChecked} onChange={toggleCompression} />
      </div>
      <Form.Item className={classes.formItem} name={fieldName}>
        <Select
          className={selectClassNames}
          size="large"
          options={options}
          placeholder="Select compression"
          showSearch
        />
      </Form.Item>
    </div>
  );
};
