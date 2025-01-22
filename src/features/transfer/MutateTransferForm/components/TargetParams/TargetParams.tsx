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
          /** className "nodrag" for opening dropdown in select in custom node React Flow https://github.com/xyflow/xyflow/discussions/2694 */
          className="nodrag"
          size="large"
          queryKey={[ConnectionQueryKey.GET_CONNECTIONS, groupId]}
          queryFunction={(params) => connectionService.getConnections({ group_id: groupId, ...params })}
          renderOptionValue={(connection) => connection.id}
          renderOptionLabel={(connection) => connection.name}
          onSelect={handleSelectConnection}
          detailQueryKey={[ConnectionQueryKey.GET_CONNECTION]}
          detailQueryFunction={(value) => connectionService.getConnection({ id: value })}
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
