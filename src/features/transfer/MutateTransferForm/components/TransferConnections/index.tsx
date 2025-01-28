import React from 'react';
import { Tabs } from 'antd';

import { TransferConnectionsProps, TransferConnectionsTab } from './types';
import { getTabsItems } from './utils';

export const TransferConnections = (props: TransferConnectionsProps) => {
  return <Tabs size="large" type="card" defaultActiveKey={TransferConnectionsTab.BASIC} items={getTabsItems(props)} />;
};
