import type { WuXingElement } from "./lib/elements";

export type PaletteSwatch = {
  name: string;
  value: string;
};

export type DailyLayoutContent = {
  dateLabel: string;
  element: WuXingElement;
  trigram: string;
  palette: PaletteSwatch[];
  fabricNote: string;
  moodTitle: string;
  moodDescription: string;
  blurb: string;
};
