import Image from "next/image";
import { removeHtmlTagFromString } from "@/lib/utils/format.util";
import { Item } from "@/types/item.type";

type ItemCardProps = {
  item: Item;
  apiVersion: string;
};
export default function ItemCard({ item, apiVersion }: ItemCardProps) {
  return (
    <li className="w-20 rounded-md border-gold md:w-24">
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
  );
}
