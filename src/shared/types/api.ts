interface IPaginationMeta {
  page: number;
  pages: number;
  total: number;
  page_size: number;
  has_next: boolean;
  has_previous: boolean;
  next_page: number;
  previous_page: number;
}

export interface IPaginationResponse<T> {
  items: T[];
  meta: IPaginationMeta;
}
