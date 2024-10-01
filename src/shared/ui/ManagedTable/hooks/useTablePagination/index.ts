import { useState } from 'react';

import { TablePagination } from '../../types';
import { PAGE_DEFAULT, PAGE_SIZE_DEFAULT } from '../../constants';

export const useTablePagination = () => {
  const [pagination, setPagination] = useState<TablePagination>({
    page: PAGE_DEFAULT,
    pageSize: PAGE_SIZE_DEFAULT,
  });

  const handleChangePagination = (page: number, pageSize: number) => {
    setPagination({
      page: pageSize === pagination.pageSize ? page : PAGE_DEFAULT,
      pageSize,
    });
  };

  return { pagination, handleChangePagination };
};
