import { Group } from '../../api';
import { checkIsGroup } from '../../guards';
import { SELECTED_GROUP_LOCAL_STORAGE_KEY } from '../../constants';

/**
 * Util for getting initial selected group from localStorage
 *
 * @returns - Initial selected group or null
 */
export const getInitialSelectedGroup = (): Group | null => {
  let group = localStorage.getItem(SELECTED_GROUP_LOCAL_STORAGE_KEY);
  if (!group) {
    return null;
  }
  try {
    group = JSON.parse(group);
    if (checkIsGroup(group)) {
      return group;
    }
    return null;
  } catch {
    return null;
  }
};
