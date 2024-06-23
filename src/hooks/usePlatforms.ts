import { useQuery } from "@tanstack/react-query";
import platforms from "../components/data/platforms";

import { Platform } from "../entities/Platform";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
// useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
