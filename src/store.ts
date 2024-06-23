import { create } from "zustand";
import { GameQuery } from "./entities/GameQuery";

interface GameQueryStore {
  gamequery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}
export const useGameQueryStore = create<GameQueryStore>((set) => ({
  gamequery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gamequery: {...store.gamequery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gamequery: {...store.gamequery, platformId } })),
  setSortOrder: (sortOrder) =>
   { set((store) => ({ gamequery: {...store.gamequery,sortOrder } }))},
  setSearchText: (searchText) =>
    set((store) => ({ gamequery: {...store.gamequery, searchText } })),
}));
