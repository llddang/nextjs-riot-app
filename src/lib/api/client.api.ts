import { API_BASE_URL } from "@/constants/env.constant";
import { ChampionOverall } from "@/types/champion.type";
import { Version } from "@/types/common.type";
import { HttpError } from "@/types/error.type";

/**
 * 무료로 사용할 수 있는 챔피언들의 목록을 가져옵니다.
 *
 * @returns {Promise<ChampionOverall[]>} 챔피언들의 key 배열
 * @throws {Error} API 요청 실패 시 오류가 발생할 수 있습니다.
 */
export async function fetchRotationChampions(): Promise<
  Version<ChampionOverall[]>
> {
  const res = await fetch(`${API_BASE_URL}/api/rotation`, {
    cache: "no-store",
  });
  if (!res.ok) {
    const error: Error = await res.json();
    throw new HttpError(error.message, res.status);
  }
  const data: Version<ChampionOverall[]> = await res.json();
  return data;
}
