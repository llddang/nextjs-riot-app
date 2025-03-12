import { fetchAllChampionsWithVersion } from "@/lib/api/server.api";
import Image from "next/image";
import Link from "next/link";

export default async function ChampionsPage() {
  const champions = await fetchAllChampionsWithVersion();

  return (
    <main className="mx-auto max-w-5xl p-10 md:px-16">
      <h1 className="text-yellow-light mb-4 text-center font-riot text-4xl font-bold lg:text-6xl">
        Champion List
      </h1>
      <ul className="mt-10 grid grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] justify-items-center gap-2 md:grid-cols-[repeat(auto-fit,_minmax(90px,_1fr))] md:gap-4">
        {champions.map((champion) => (
          <li
            key={champion.id}
            className="transition-[transform] duration-100 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-gold"
          >
            <Link
              href={`champions/${champion.id}`}
              className="relative block h-20 w-20 md:h-24 md:w-24"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
                fill
                sizes="20vw"
                alt={champion.name}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
