import { ImageInfo } from "@/types/common.type";

export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: ImageInfo;
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  partype: string;
  info: ChampionInfo;
  spells: ChampionSpell[];
  passive: ChampionPassive;
};

export type ChampionList = {
  type: string;
  format: string;
  version: string;
  data: Record<string, Champion>;
};

export type ChampionOverall = Pick<
  Champion,
  "id" | "key" | "name" | "title" | "blurb" | "info" | "image" | "partype"
>;

export type ChampionOverallList = {
  type: string;
  format: string;
  version: string;
  data: Record<string, ChampionOverall>;
};

export type ChampionSpell = {
  id: string;
  name: string;
  description: string;
  image: ImageInfo;
};

export type ChampionPassive = {
  name: string;
  description: string;
  image: ImageInfo;
};

export type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};
