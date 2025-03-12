import { fetchAllItemsWithVersion } from "@/lib/api/server.api";
import { removeHtmlTagFromString } from "@/lib/utils/format.util";
import Image from "next/image";

export default async function ItemsPage() {
  const { version: apiVersion, data: items } = await fetchAllItemsWithVersion();

  return (
    <main className="mx-auto mt-16 max-w-5xl p-10 md:px-16">
      <h1 className="text-yellow-light mb-4 text-center font-riot text-4xl font-bold md:text-6xl">
        Item List
      </h1>
      <ul className="mt-10 grid grid-cols-[repeat(auto-fit,_minmax(5rem,_1fr))] justify-items-center gap-4 md:grid-cols-[repeat(auto-fit,_minmax(6rem,_1fr))]">
        {items.map((item) => (
          <li key={item.id} className="w-20 rounded-md border-gold md:w-24">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${apiVersion}/img/item/${item.image.full}`}
              alt={item.name}
              width={96}
              height={96}
              className="hover h-20 w-20 border-4 border-gold transition-[transform] duration-100 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-gold md:h-24 md:w-24"
            />
            <span className="break-keep text-sm font-semibold text-gold">
              {removeHtmlTagFromString(item.name)}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
