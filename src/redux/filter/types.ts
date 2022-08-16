export interface Sort {
  name: string;
  sort: string;
}

export interface FilterSliceState {
  currentPage: number;
  totalPages: number;
  searchTerm: string;
  categoryId: number;
  filter: Sort;
}
