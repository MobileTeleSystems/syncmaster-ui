import { Connection } from '@entities/connection';
import { ConnectionType } from '@shared/types';
import { OptionItem } from '@shared/ui';
import { Form } from 'antd';

import { UseSelectConnectionTypeProps } from './types';

/** Hook for handling connection type state in transfer form */
export const useSelectConnectionType = ({ connectionParamFieldName }: UseSelectConnectionTypeProps) => {
  /** Need combine useWatch and useFormInstance, because useWatch return undefined while this component is rendered first time after mounting */
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
