"use client";

import ChampionCard from "@/components/features/champion-card";
import { useRotationChampionsQuery } from "@/lib/hooks/api/use-rotation-champions-query";

export default function ChampionList() {
  const {
    data: { data: champions, version: apiVersion },
  } = useRotationChampionsQuery();

  return (
    <ul className="mt-10 grid grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] justify-items-center gap-2 md:grid-cols-[repeat(auto-fit,_minmax(96px,_1fr))] md:gap-4">
      {apiVersion &&
        champions.map((champion) => (
          <ChampionCard
            key={champion.id}
            champion={champion}
            apiVersion={apiVersion}
          />
        ))}
    </ul>
  );
}
