import React, { memo } from 'react';
import { ConnectionQueryKey, connectionService } from '@entities/connection';
import { ManagedSelect } from '@shared/ui';
import { Form, Input } from 'antd';

import { useSelectConnectionType } from '../../hooks';

import { SourceParamsProps } from './types';
import { TRANSFER_SOURCE_CONNECTION_TYPE_COMPONENT } from './constants';

export const SourceParams = memo(({ groupId }: SourceParamsProps) => {
  const { selectedConnectionType, handleSelectConnection } = useSelectConnectionType({
    connectionParamFieldName: 'source_params',
  });

  return (
    <>
      <Form.Item label="Connection" name="source_connection_id" rules={[{ required: true }]}>
        <ManagedSelect
          /** className "nodrag" and "nowheel" for select in custom node React Flow https://reactflow.dev/api-reference/react-flow#no-drag-class-name */
          className="nodrag"
          popupClassName="nowheel"
          size="large"
          queryKey={[ConnectionQueryKey.GET_CONNECTIONS, groupId]}
          queryFunction={(params) => connectionService.getConnections({ group_id: groupId, ...params })}
          renderOptionValue={(connection) => connection.id}
          renderOptionLabel={(connection) => connection.name}
          onSelect={handleSelectConnection}
          detailQueryKey={[ConnectionQueryKey.GET_CONNECTION]}
          detailQueryFunction={(value) => connectionService.getConnection({ id: value })}
          placeholder="Select source connection"
        />
      </Form.Item>
      <Form.Item name={['source_params', 'type']} style={{ display: 'none' }}>
        <Input />
      </Form.Item>
      {TRANSFER_SOURCE_CONNECTION_TYPE_COMPONENT[selectedConnectionType!]}
    </>
  );
});
