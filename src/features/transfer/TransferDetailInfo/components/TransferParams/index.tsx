import React from 'react';
import { Descriptions } from 'antd';

import { TransferParamsProps } from './types';
import { getDescriptionItems } from './utils';

export const TransferParams = ({ data, ...props }: TransferParamsProps) => {
  return (
    <Descriptions {...props}>
      <Descriptions.Item label="Type" span={3}>
        {data.type}
      </Descriptions.Item>
      {getDescriptionItems({ data }).map((item, index) => (
        <Descriptions.Item label={item.label} span={3} key={index}>
          {item.content}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};
