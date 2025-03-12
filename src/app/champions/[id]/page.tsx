import ChampionDetailBackground from "@/components/features/champion-detail-background";
import { fetchChampionByIdWithVersion } from "@/lib/api/server.api";
import Image from "next/image";

export async function generateMetadata({ params }: ChampionDetailPageProps) {
  const { data: champion } = await fetchChampionByIdWithVersion(params.id);
  return {
    title: champion.id,
    description: champion.lore,
  };
}

type ChampionDetailPageProps = {
  params: { id: string };
};
export default async function ChampionDetailPage({
  params,
}: ChampionDetailPageProps) {
  const { version: apiVersion, data: champion } =
    await fetchChampionByIdWithVersion(params.id);
  return (
    <main className="relative mt-14 h-[calc(100vh-56px)]">
      <ChampionDetailBackground id={champion.id} />
      <div className="flex h-full flex-col justify-end gap-4 p-6">
        <section className="flex flex-col gap-6 font-riot md:flex-row md:gap-10">
          <div className="w-fit flex-shrink-0 text-gold mix-blend-color-dodge">
            <h1 className="text-8xl font-bold italic">{champion.id}</h1>
            <p>
              <b className="text-3xl font-bold">{champion.name}</b>
              <span className="ml-2 text-lg font-semibold">
                {champion.title}
              </span>
            </p>
          </div>
          <span className="font-bold text-white">{champion.lore}</span>
        </section>
        <div className="hidden gap-4 text-sm font-medium text-white sm:flex sm:items-center">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${apiVersion}/img/passive/${champion.passive.image.full}`}
            width={40}
            height={40}
            alt={champion.passive.name}
            className="h-10 w-10 rounded-sm"
          />
          <p>{champion.passive.description}</p>
        </div>
      </div>
    </main>
  );
}
