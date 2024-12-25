import { useDebouncedState } from '@shared/hooks';

import { SEARCH_VALUE_CHANGE_DELAY, SEARCH_VALUE_DEFAULT } from '../../constants';

import { UseSearchProps } from './types';

/** Hook for handling search value in Select */
export const useSearch = ({ onSearch = () => undefined }: UseSearchProps) => {
  const {
    value: searchValue,
    setValue: setSearchValue,
    setDebouncedValue: setDebouncedSearchValue,
  } = useDebouncedState(SEARCH_VALUE_DEFAULT, SEARCH_VALUE_CHANGE_DELAY);

  const handleSearch = (value: string) => {
    setDebouncedSearchValue(value);
    onSearch(value);
  };

  return { searchValue, handleSearch, setSearchValue };
};
