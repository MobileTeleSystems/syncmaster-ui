import React from 'react';
import { Descriptions } from 'antd';

import { ConnectionAuthDataProps } from './types';
import { getDescriptionItems } from './utils';

export const ConnectionAuthData = ({ data, ...props }: ConnectionAuthDataProps) => {
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
