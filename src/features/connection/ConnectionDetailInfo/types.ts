import { Connection } from '@entities/connection';
import { GroupData } from '@entities/group';
import { DescriptionsProps } from 'antd';

export interface ConnectionDetailInfoProps extends DescriptionsProps {
  connection: Connection;
  group: GroupData;
}
