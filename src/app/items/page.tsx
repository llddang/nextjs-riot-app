import ItemCard from "@/components/features/item-card";
import { fetchAllItemsWithVersion } from "@/lib/api/server.api";

export default async function ItemsPage() {
  const { version: apiVersion, data: items } = await fetchAllItemsWithVersion();

  return (
    <main className="mx-auto mt-16 max-w-5xl p-10 md:px-16">
      <h1 className="text-yellow-light mb-4 text-center font-riot text-4xl font-bold md:text-6xl">
        Item List
      </h1>
      <ul className="mt-10 grid grid-cols-[repeat(auto-fit,_minmax(5rem,_1fr))] justify-items-center gap-4 md:grid-cols-[repeat(auto-fit,_minmax(6rem,_1fr))]">
        {items.map((item) => (
          <ItemCard item={item} apiVersion={apiVersion} />
        ))}
      </ul>
    </main>
  );
}
