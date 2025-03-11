import {
  getAPIVersion,
  getChampionList,
  getRotationChampions,
} from "@/lib/api/server.api";
import { ChampionOverall } from "@/types/champion.type";
import { HttpError } from "@/types/error.type";

export async function GET() {
  try {
    const freeChampionIds = await getRotationChampions();

    const version = await getAPIVersion();
    const champions = await getChampionList(version);

    const freeChampions: ChampionOverall[] = Object.values(champions).filter(
      (champion) => freeChampionIds.includes(Number(champion.key)),
    );

    const responseData = { version, champions: freeChampions };

    return new Response(JSON.stringify(responseData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    const status = error instanceof HttpError ? error.statusCode : 400;
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    return Response.json({ message }, { status });
  }
}
