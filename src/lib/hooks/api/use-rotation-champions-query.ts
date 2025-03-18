import { useSuspenseQuery } from "@tanstack/react-query";
import { ChampionOverall } from "@/types/champion.type";
import { Version } from "@/types/common.type";
import { fetchRotationChampions } from "@/lib/api/client.api";

export function useRotationChampionsQuery() {
  const query = useSuspenseQuery({
    queryFn: async (): Promise<Version<ChampionOverall[]>> =>
      await fetchRotationChampions(),
    queryKey: ["rotation-champions"],
  });
  return query;
}
