"use server";

import {
  fetchAllChampions,
  fetchAllItems,
  fetchAPIVersion,
  fetchChampionById,
} from "@/lib/api/core.api";
import { Champion, ChampionOverall } from "@/types/champion.type";
import { Version } from "@/types/common.type";
import { Item } from "@/types/item.type";

/**
 * 최신 API 버전의 모든 챔피언 정보를 배열 형태로 가져옵니다.
 *
 * @returns {Promise<Version<ChampionOverall[]>>} 모든 챔피언 정보가 담긴 배열
 * @throws {Error} API 요청 실패 시 오류가 발생할 수 있습니다.
 */
export async function fetchAllChampionsWithVersion(): Promise<
  Version<ChampionOverall[]>
> {
  const apiVersion = await fetchAPIVersion();
  const champions = await fetchAllChampions(apiVersion);

  const formattedChampion = Object.values(champions);

  return { version: apiVersion, data: formattedChampion };
}

/**
 * 최신 API 버전에서 특정 ID의 챔피언 상세 정보를 가져옵니다.
 *
 * @param {string} id - 조회할 챔피언의 고유 ID (예: "Aatrox")
 * @returns {Promise<ChampVersion<Champion>ion>} 해당 챔피언의 상세 정보
 * @throws {Error} API 요청 실패 또는 챔피언을 찾을 수 없을 때 오류가 발생할 수 있습니다.
 */
export async function fetchChampionByIdWithVersion(
  id: string,
): Promise<Version<Champion>> {
  const apiVersion = await fetchAPIVersion();
  const champions = await fetchChampionById(apiVersion, id);

  const champion = Object.values(champions)[0];

  return { version: apiVersion, data: champion };
}

/**
 * 최신 API 버전의 모든 아이템 정보를 배열 형태로 가져옵니다.
 * 각 아이템 객체에는 고유 ID가 포함됩니다.
 *
 * @returns {Promise<Version<Item[]>>} 모든 아이템 정보가 담긴 배열 (각 아이템에 id 필드 포함)
 * @throws {Error} API 요청 실패 시 오류가 발생할 수 있습니다.
 */
export async function fetchAllItemsWithVersion(): Promise<Version<Item[]>> {
  const apiVersion = await fetchAPIVersion();
  const items = await fetchAllItems(apiVersion);

  const formattedItems = Object.entries(items).map(([id, item]) => ({
    id,
    ...item,
  }));

  return { version: apiVersion, data: formattedItems };
}
