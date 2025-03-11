import { ImageInfo } from "@/types/common.type";

export type Item = {
  name: string;
  plaintext: string;
  image: ImageInfo;
};

export type ItemList = {
  type: string;
  version: string;
  data: Record<string, Item>;
};
