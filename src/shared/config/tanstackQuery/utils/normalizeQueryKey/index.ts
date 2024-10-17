import { InvalidateQueryFilters } from '@tanstack/react-query';

// Util for changing query key type from number to string type to avoid separated cache (for example, '1' and 1 will be equal)
export const normalizeQueryKey = (queryKey: InvalidateQueryFilters['queryKey'] = []) => {
  return queryKey.map((key) => (typeof key === 'number' ? String(key) : key));
};
