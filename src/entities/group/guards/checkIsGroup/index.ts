import { Group } from '../../api';

/**
 * Guard for checking correctness of the type of the group variable read from localStorage
 *
 * @returns - Initial selected group or null
 */
export const checkIsGroup = (group: unknown): group is Group => {
  const checkingGroup = group as Group;

  return (
    !!checkingGroup?.data &&
    !!checkingGroup.data?.id &&
    !!checkingGroup.data?.name &&
    !!checkingGroup.data?.owner_id &&
    !!checkingGroup?.role
  );
};
