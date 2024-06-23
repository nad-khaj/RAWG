export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string | null;
  searchText?: string | null;
}
