import { Connection } from '@entities/connection';
import { ConnectionType } from '@shared/types';
import { OptionItem } from '@shared/ui';
import { Form } from 'antd';
import { useState } from 'react';

import { UseSelectConnectionTypeProps } from './types';

/** Hook for handling connection type state in transfer form */
export const useSelectConnectionType = ({
  connectionParamFieldName,
  initialConnectionType,
}: UseSelectConnectionTypeProps) => {
  const formInstance = Form.useFormInstance();
  const [selectedConnectionType, setConnectionType] = useState<ConnectionType | undefined>(initialConnectionType);

  const handleSelectConnection = (value: string | number, connection: OptionItem<Connection>) => {
    const connectionType = connection.data.type;
    setConnectionType(connectionType);
    formInstance.setFieldValue([connectionParamFieldName, 'type'], connectionType);
  };

  return { selectedConnectionType, handleSelectConnection };
};
