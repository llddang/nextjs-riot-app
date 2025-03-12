import { API_BASE_URL } from "@/constants/env.constant";
import { ChampionOverall } from "@/types/champion.type";

/**
 * 무료로 사용할 수 있는 챔피언들의 목록을 가져옵니다.
 *
 * @returns {Promise<ChampionOverall[]>} 챔피언들의 key 배열
 * @throws {Error} API 요청 실패 시 오류가 발생할 수 있습니다.
 */
export async function fetchRotationChampion(): Promise<ChampionOverall[]> {
  const res = await fetch(`${API_BASE_URL}/api/rotation`, {
    cache: "no-store",
  });
  const data: ChampionOverall[] = await res.json();
  return data;
}
