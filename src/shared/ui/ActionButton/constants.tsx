import React from 'react';
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';

import { ActionType } from './types';

export const BUTTON_SETTINGS = {
  [ActionType.CREATE]: {
    displayText: 'create',
    icon: <PlusCircleOutlined />,
    danger: false,
  },
  [ActionType.EDIT]: {
    displayText: 'edit',
    icon: <EditOutlined />,
    danger: false,
  },
  [ActionType.DELETE]: {
    displayText: 'delete',
    icon: <DeleteOutlined />,
    danger: true,
  },
} as const;
