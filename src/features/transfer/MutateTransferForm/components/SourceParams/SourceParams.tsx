import React from 'react';
import { ConnectionQueryKey, connectionService } from '@entities/connection';
import { ManagedSelect } from '@shared/ui';
import { Divider, Form, Input } from 'antd';

import { useSelectConnectionType } from '../../hooks';

import { SourceParamsProps } from './types';
import { TRANSFER_SOURCE_CONNECTION_TYPE_COMPONENT } from './constants';

export const SourceParams = ({ groupId, initialSourceConnectionType }: SourceParamsProps) => {
  const { selectedConnectionType, handleSelectConnection } = useSelectConnectionType({
    connectionParamFieldName: 'source_params',
    initialConnectionType: initialSourceConnectionType,
  });

  return (
    <>
      <Divider>Source params</Divider>
      <Form.Item label="Source connection" name="source_connection_id" rules={[{ required: true }]}>
        <ManagedSelect
          size="large"
          queryKey={[ConnectionQueryKey.GET_CONNECTIONS, groupId]}
          queryFunction={(params) => connectionService.getConnections({ group_id: groupId, ...params })}
          renderOptionValue={(connection) => connection.id}
          renderOptionLabel={(connection) => connection.name}
          onSelect={handleSelectConnection}
          placeholder="Select source connection"
        />
      </Form.Item>
      <Form.Item name={['source_params', 'type']} style={{ display: 'none' }}>
        <Input />
      </Form.Item>
      {TRANSFER_SOURCE_CONNECTION_TYPE_COMPONENT[selectedConnectionType!]}
    </>
  );
};
