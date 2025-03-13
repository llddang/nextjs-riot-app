"use client";

import { useEffect, useState } from "react";
import ChampionCard from "@/components/features/champion-card";
import { fetchRotationChampions } from "@/lib/api/client.api";
import { ChampionOverall } from "@/types/champion.type";
import { toast } from "react-toastify";
import { HttpError } from "@/types/error.type";

export default function RotatePage() {
  const [champions, setChampions] = useState<ChampionOverall[]>([]);
  const [apiVersion, setApiVersion] = useState<string | null>(null);

  useEffect(() => {
    fetchRotationChampions()
      .then(({ data, version }) => {
        setChampions(data);
        setApiVersion(version);
      })
      .catch((e) => {
        if (
          e instanceof HttpError &&
          (e.statusCode === 403 || e.statusCode === 401)
        )
          toast.error("유효하지 않은 API 키입니다.");
        else toast.error("오늘의 무료 챔피언을 불러오는데 실패했습니다.");
      });
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
