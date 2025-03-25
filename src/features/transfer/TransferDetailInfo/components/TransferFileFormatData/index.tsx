import React from 'react';
import { Descriptions } from 'antd';
import { useTranslation } from 'react-i18next';

import { TransferFileFormatDataProps } from './types';
import { getDescriptionItems } from './utils';

export const TransferFileFormatData = ({ data, ...props }: TransferFileFormatDataProps) => {
  const { t } = useTranslation('file');

  return (
    <Descriptions {...props}>
      <Descriptions.Item label={t('type', { ns: 'shared' })} span={3}>
        {data.type}
      </Descriptions.Item>
      {getDescriptionItems({ data, t }).map((item, index) => (
        <Descriptions.Item label={item.label} span={3} key={index}>
          {item.content}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};
