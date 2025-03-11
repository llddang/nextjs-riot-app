import { RIOT_API_KEY } from "@/constants/env.constant";
import {
  Champion,
  ChampionList,
  ChampionOverall,
  ChampionOverallList,
} from "@/types/champion.type";
import { categorizeError, ErrorResponse } from "@/types/error.type";
import { Item, ItemList } from "@/types/item.type";
import { RotationChampion } from "@/types/rotation-champion.type";

/**
 * League of Legends Data Dragon API에서 최신 게임 버전을 가져옵니다.
 *
 * @returns {Promise<string>} 최신 League of Legends 게임 버전 (예: "15.5.1")
 *
 * @throws {Error} API 요청 실패 시 오류가 발생할 수 있습니다.
 */
export async function getAPIVersion(): Promise<string> {
  const versionResponse = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
    {
      cache: "force-cache",
      next: {
        revalidate: 86400,
      },
    },
  );
  if (!versionResponse.ok) {
    throw categorizeError("AccessDenied", versionResponse.status);
  }
  const versions: string[] = await versionResponse.json();
  const latestVersion = versions[0];
  return latestVersion;
}

/**
 * 특정 버전의 League of Legends 챔피언 전체 목록 데이터를 가져옵니다.
 *
 * @param {string} version - 데이터를 가져올 게임 버전 (예: "15.5.1")
 * @returns {Promise<Record<string, ChampionOverall>>} 챔피언 ID를 키로 하는 챔피언 데이터 객체
 *
 * @throws {Error} API 요청 실패 시 오류가 발생할 수 있습니다.
 */
export async function getChampionList(
  version: string,
): Promise<Record<string, ChampionOverall>> {
  const championsResponse = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    {
      cache: "force-cache",
      next: {
        revalidate: 86400,
      },
    },
  );
  if (!championsResponse.ok) {
    throw categorizeError("AccessDenied", championsResponse.status);
  }
  const championsData: ChampionOverallList = await championsResponse.json();
  return championsData.data;
}

/**
 * 특정 버전의 특정 League of Legends 챔피언의 상세 데이터를 가져옵니다.
 *
 * @param {string} version - 데이터를 가져올 게임 버전 (예: "15.5.1")
 * @param {string} id - 데이터를 가져올 챔피언 ID (예: "Aatrox")
 * @returns {Promise<Record<string, Champion>>} 챔피언 ID를 키로 하는 챔피언 데이터 객체
 *
 * @throws {Error} API 요청 실패 시 오류가 발생할 수 있습니다.
 */
export async function getChampionById(
  version: string,
  id: string,
): Promise<Record<string, Champion>> {
  const championsResponse = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    },
  );
  if (!championsResponse.ok) {
    throw categorizeError("AccessDenied", championsResponse.status);
  }
  const championsData: ChampionList = await championsResponse.json();
  return championsData.data;
}

/**
 * 특정 버전의 League of Legends 아이템 전체 목록 데이터를 가져옵니다.
 *
 * @param {string} version - 데이터를 가져올 게임 버전 (예: "15.5.1")
 * @returns {Promise<Record<string, Item>>} 아이템 ID를 키로 하는 아이템 데이터 객체
 *
 * @throws {Error} API 요청 실패 시 오류가 발생할 수 있습니다.
 */
export async function getItemList(
  version: string,
): Promise<Record<string, Item>> {
  const championsResponse = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
    {
      cache: "force-cache",
    },
  );
  if (!championsResponse.ok) {
    throw categorizeError("AccessDenied", championsResponse.status);
  }
  const championsData: ItemList = await championsResponse.json();
  return championsData.data;
}

/**
 * 무료로 사용할 수 있는 챔피언들의 key들을 가져옵니다.
 *
 * @returns {Promise<number[]>} 챔피언들의 key 배열
 *
 * @throws {Error} API 요청 실패 시 오류가 발생할 수 있습니다.
 */
export async function getRotationChampions(): Promise<number[]> {
  const rotationResponse = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "X-Riot-Token": RIOT_API_KEY,
      },
    },
  );
  if (!rotationResponse.ok) {
    const errorData: ErrorResponse = await rotationResponse.json();
    throw categorizeError(
      errorData.status.message,
      errorData.status.status_code,
    );
  }
  const rotationData: RotationChampion = await rotationResponse.json();
  return rotationData.freeChampionIds;
}
