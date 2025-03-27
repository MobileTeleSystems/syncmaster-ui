import { ButtonProps } from 'antd';

export enum ActionType {
  CREATE = 'create',
  EDIT = 'edit',
  DELETE = 'delete',
}

export interface ActionButtonProps extends ButtonProps {
  actionType: `${ActionType}`;
  to?: string;
}
