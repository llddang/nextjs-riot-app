import { getAPIVersion, getChampionList } from "@/lib/api/server.api";
import { HttpError } from "@/types/error.type";

export async function GET() {
  try {
    const version = await getAPIVersion();
    const champions = await getChampionList(version);

    const responseData = { version, champions: Object.values(champions) };

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
