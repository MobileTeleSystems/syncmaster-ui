import React from 'react';
import { Descriptions } from 'antd';
import { useTranslation } from 'react-i18next';

import { GroupDetailInfoProps } from './types';

export const GroupDetailInfo = ({ group, owner, ...props }: GroupDetailInfoProps) => {
  const { t } = useTranslation();

  return (
    <Descriptions title={t('groupInfo', { ns: 'group' })} bordered {...props}>
      <Descriptions.Item label={t('id')} span={3}>
        {group.id}
      </Descriptions.Item>
      <Descriptions.Item label={t('name')} span={3}>
        {group.name}
      </Descriptions.Item>
      <Descriptions.Item label={t('description')} span={3}>
        {group.description}
      </Descriptions.Item>
      <Descriptions.Item label={t('owner', { ns: 'auth' })} span={3}>
        {owner.username}
      </Descriptions.Item>
    </Descriptions>
  );
};
