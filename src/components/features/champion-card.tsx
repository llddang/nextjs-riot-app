import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChampionOverall } from "@/types/champion.type";

type ChampionCardProps = {
  champion: ChampionOverall;
  apiVersion: string;
};

export default React.memo(ChampionCard);
function ChampionCard({ champion, apiVersion }: ChampionCardProps) {
  return (
    <li className="transition-[transform] duration-100 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-gold">
      <Link
        href={`champions/${champion.id}`}
        className="relative block h-20 w-20 md:h-24 md:w-24"
      >
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/${apiVersion}/img/champion/${champion.image.full}`}
          fill
          sizes="20vw"
          alt={champion.name}
        />
      </Link>
    </li>
  );
}
