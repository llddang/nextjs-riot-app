import { getAPIVersion, getItemList } from "@/lib/api/server.api";

export async function GET() {
  const version = await getAPIVersion();
  const items = await getItemList(version);

  const responseData = { version, items: Object.values(items) };

  return new Response(JSON.stringify(responseData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
