import React, { memo } from 'react';
import { ConnectionQueryKey, connectionService, CONNECTION_TYPE_NAMES } from '@entities/connection';
import { ManagedSelect } from '@shared/ui';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';

import { useSelectConnectionType } from '../../hooks';

import { TargetParamsProps } from './types';
import { TRANSFER_TARGET_CONNECTION_TYPE_COMPONENT } from './constants';

export const TargetParams = memo(({ groupId }: TargetParamsProps) => {
  const { t } = useTranslation('connection');

  const { selectedConnectionType, handleSelectConnection } = useSelectConnectionType({
    connectionParamFieldName: 'target_params',
  });

  return (
    <>
      <Form.Item label={t('connection')} name="target_connection_id" rules={[{ required: true }]}>
        <ManagedSelect
          /** className "nodrag" and "nowheel" for select in custom node React Flow https://reactflow.dev/api-reference/react-flow#no-drag-class-name */
          className="nodrag"
          popupClassName="nowheel"
          size="large"
          queryKey={[ConnectionQueryKey.GET_CONNECTIONS, groupId]}
          queryFunction={(params) => connectionService.getConnections({ group_id: groupId, ...params })}
          renderOptionValue={(connection) => connection.id}
          renderOptionLabel={(connection) => `${connection.name} (${CONNECTION_TYPE_NAMES[connection.type]})`}
          onSelect={handleSelectConnection}
          detailQueryKey={[ConnectionQueryKey.GET_CONNECTION]}
          detailQueryFunction={(value) => connectionService.getConnection({ id: value })}
          placeholder={t('selectTargetConnection', { ns: 'transfer' })}
        />
      </Form.Item>
      <Form.Item name={['target_params', 'type']} hidden />
      {TRANSFER_TARGET_CONNECTION_TYPE_COMPONENT[selectedConnectionType!]}
    </>
  );
});
