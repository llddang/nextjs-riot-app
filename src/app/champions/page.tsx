import ChampionCard from "@/components/features/champion-card";
import { fetchAllChampionsWithVersion } from "@/lib/api/server.api";

export default async function ChampionsPage() {
  const { version: apiVersion, data: champions } =
    await fetchAllChampionsWithVersion();

  return (
    <main className="mx-auto mt-16 max-w-5xl p-10 md:px-16">
      <h1 className="text-yellow-light mb-4 text-center font-riot text-4xl font-bold md:text-6xl">
        Champion List
      </h1>
      <ul className="mt-10 grid grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] justify-items-center gap-2 md:grid-cols-[repeat(auto-fit,_minmax(96px,_1fr))] md:gap-4">
        {champions.map((champion) => (
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
