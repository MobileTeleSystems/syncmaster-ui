import React from 'react';
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';

import { TransferConnectionsProps, TransferConnectionsTab } from './types';
import { getTabsItems } from './utils';

export const TransferConnections = (props: TransferConnectionsProps) => {
  const { t } = useTranslation('transfer');

  return (
    <Tabs
      size="large"
      type="card"
      defaultActiveKey={TransferConnectionsTab.BASIC}
      items={getTabsItems({ ...props, t })}
      destroyInactiveTabPane
    />
  );
};
