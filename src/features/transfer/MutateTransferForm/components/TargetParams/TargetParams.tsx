import React from 'react';
import { ConnectionQueryKey, connectionService } from '@entities/connection';
import { ManagedSelect } from '@shared/ui';
import { Divider, Form, Input } from 'antd';

import { useSelectConnectionType } from '../../hooks';

import { TargetParamsProps } from './types';
import { TRANSFER_TARGET_CONNECTION_TYPE_COMPONENT } from './constants';

export const TargetParams = ({ groupId, initialTargetConnectionType }: TargetParamsProps) => {
  const { selectedConnectionType, handleSelectConnection } = useSelectConnectionType({
    connectionParamFieldName: 'target_params',
    initialConnectionType: initialTargetConnectionType,
  });

  return (
    <>
      <Divider>Target params</Divider>
      <Form.Item label="Target connection" name="target_connection_id" rules={[{ required: true }]}>
        <ManagedSelect
          size="large"
          queryKey={[ConnectionQueryKey.GET_CONNECTIONS, groupId]}
          queryFunction={(params) => connectionService.getConnections({ group_id: groupId, ...params })}
          renderOptionValue={(connection) => connection.id}
          renderOptionLabel={(connection) => connection.name}
          onSelect={handleSelectConnection}
          placeholder="Select target connection"
        />
      </Form.Item>
      <Form.Item name={['target_params', 'type']} style={{ display: 'none' }}>
        <Input />
      </Form.Item>
      {TRANSFER_TARGET_CONNECTION_TYPE_COMPONENT[selectedConnectionType!]}
    </>
  );
};
