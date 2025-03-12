import { ImageInfo } from "@/types/common.type";

export type Item = {
  id: string;
  name: string;
  plaintext: string;
  image: ImageInfo;
};

export type ItemData = Omit<Item, "id">;

export type ItemList = {
  type: string;
  version: string;
  data: Record<string, ItemData>;
};
