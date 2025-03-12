"use client";

import ChampionCard from "@/components/features/champion-card";
import { fetchRotationChampions } from "@/lib/api/client.api";
import { ChampionOverall } from "@/types/champion.type";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function RotatePage() {
  const [champions, setChampions] = useState<ChampionOverall[]>([]);
  const [apiVersion, setApiVersion] = useState<string | null>(null);

  useEffect(() => {
    fetchRotationChampions()
      .then(({ version, data }) => {
        setChampions(data);
        setApiVersion(version);
      })
      .catch(() => notFound());
  }, []);

  return (
    <main className="mx-auto mt-16 max-w-5xl p-10 md:px-16">
      <h1 className="text-yellow-light mb-4 text-center font-riot text-4xl font-bold md:text-6xl">
        Today's Free <span className="text-red">Champion</span> List
      </h1>
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
    </main>
  );
}
