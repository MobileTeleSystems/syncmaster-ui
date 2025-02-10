import { Connection } from '@entities/connection';
import { ConnectionType } from '@shared/types';
import { OptionItem } from '@shared/ui';
import { Form } from 'antd';

import { UseSelectConnectionTypeProps } from './types';

/** Hook for handling connection type state in transfer form */
export const useSelectConnectionType = ({ connectionParamFieldName }: UseSelectConnectionTypeProps) => {
  /* useWatch takes a value from Form.Item, but useFormInstance takes one from general form state
   * useWatch returns undefined when Form.Item has not rendered yet
   * https://github.com/ant-design/ant-design/issues/49010
   */
  Form.useWatch([connectionParamFieldName, 'type']);
  const formInstance = Form.useFormInstance();

  const handleSelectConnection = (value: string | number, connection: OptionItem<Connection>) => {
    const connectionType = connection.data.type;
    formInstance.setFieldValue([connectionParamFieldName, 'type'], connectionType);
  };

  return {
    selectedConnectionType: formInstance.getFieldValue([connectionParamFieldName, 'type']) as ConnectionType,
    handleSelectConnection,
  };
};
