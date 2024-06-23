import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { useGameQueryStore } from "../store";
import { Game } from "../entities/Game";
const apiClient = new ApiClient<Game>("games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gamequery);
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),

    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};
export default useGames;
