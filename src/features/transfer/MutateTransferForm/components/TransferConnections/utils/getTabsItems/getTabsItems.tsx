import React from 'react';
import { Fieldset } from '@shared/ui';

import { TransferConnectionsDefault } from '../../../TransferConnectionsDefault';
import { TransferConnectionsCanvas } from '../../../TransferConnectionsCanvas';
import { TransferConnectionsTab } from '../../types';

import { GetTabsItemsProps } from './types';

export const getTabsItems = ({ t, ...props }: GetTabsItemsProps) => [
  {
    label: t('basic'),
    key: TransferConnectionsTab.BASIC,
    children: <TransferConnectionsDefault {...props} />,
  },
  {
    label: t('advanced'),
    key: TransferConnectionsTab.ADVANCED,
    children: (
      <Fieldset title={t('transferAdvancedSettings', { ns: 'connection' })}>
        <TransferConnectionsCanvas {...props} />
      </Fieldset>
    ),
  },
];
