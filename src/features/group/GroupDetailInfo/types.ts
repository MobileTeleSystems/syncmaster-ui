import { GroupData } from '@entities/group';
import { User } from '@entities/user';
import { DescriptionsProps } from 'antd';

export interface GroupDetailInfoProps extends DescriptionsProps {
  group: GroupData;
  owner: User;
}
