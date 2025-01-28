import { ReactNode } from 'react';

export interface FieldsetProps {
  title: string;
  hasShowContent?: boolean;
  headerSlot?: ReactNode;
}
