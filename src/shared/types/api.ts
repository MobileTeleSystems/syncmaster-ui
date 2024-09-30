interface PaginationMeta {
  page: number;
  pages: number;
  total: number;
  page_size: number;
  has_next: boolean;
  has_previous: boolean;
  next_page: number;
  previous_page: number;
}

export interface PaginationResponse<T> {
  items: T[];
  meta: PaginationMeta;
}

export interface PageParams {
  page_size: number;
  page: number;
}
