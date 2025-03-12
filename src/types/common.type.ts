export type ImageInfo = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type Version<T> = {
  data: T;
  version: string;
};
