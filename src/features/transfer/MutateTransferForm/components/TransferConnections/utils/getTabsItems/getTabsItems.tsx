import React from 'react';
import { Fieldset } from '@shared/ui';

import { TransferConnectionsDefault } from '../../../TransferConnectionsDefault';
import { TransferConnectionsCanvas } from '../../../TransferConnectionsCanvas';
import { TransferConnectionsTab } from '../../types';

import { GetTabsItemsProps } from './types';

export const getTabsItems = (props: GetTabsItemsProps) => [
  {
    label: 'Basic',
    key: TransferConnectionsTab.BASIC,
    children: <TransferConnectionsDefault {...props} />,
  },
  {
    label: 'Advanced',
    key: TransferConnectionsTab.ADVANCED,
    children: (
      <Fieldset title="Connections settings">
        <TransferConnectionsCanvas {...props} />
      </Fieldset>
    ),
  },
];
