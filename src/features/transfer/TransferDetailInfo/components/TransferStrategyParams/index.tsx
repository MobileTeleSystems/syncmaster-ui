import React from 'react';
import { Descriptions } from 'antd';

import { TransferStrategyParamsProps } from './types';

export const TransferStrategyParams = ({ data, ...props }: TransferStrategyParamsProps) => {
  return (
    <Descriptions {...props}>
      <Descriptions.Item label="Type" span={3}>
        {data.type}
      </Descriptions.Item>
      {data.increment_by && (
        <Descriptions.Item label="Increment by" span={3}>
          {data.increment_by}
        </Descriptions.Item>
      )}
    </Descriptions>
  );
};
