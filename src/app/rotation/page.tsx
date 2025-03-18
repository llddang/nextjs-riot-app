import { Suspense } from "react";
import ChampionList from "@/components/features/champion-list";
import Loading from "@/app/loading";

export default function RotatePage() {
  return (
    <main className="mx-auto mt-16 max-w-5xl p-10 md:px-16">
      <h1 className="text-yellow-light mb-4 text-center font-riot text-4xl font-bold md:text-6xl">
        Today's Free <span className="text-red">Champion</span> List
      </h1>
      <Suspense fallback={<Loading />}>
        <ChampionList />
      </Suspense>
    </main>
  );
}
