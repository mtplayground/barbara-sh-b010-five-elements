import type { WuXingElement } from "./lib/elements";
import type {
  BaguaTrigram,
  TrigramMoodAxis,
  TrigramMotif,
} from "./lib/trigrams";

export type PaletteSwatch = {
  name: string;
  value: string;
};

export type DailyLayoutContent = {
  dateLabel: string;
  element: WuXingElement;
  trigram: BaguaTrigram;
  palette: PaletteSwatch[];
  fabricNote: string;
  moodTitle: string;
  moodDescription: string;
  moodAxes: TrigramMoodAxis[];
  blurb: string;
  accentColor: string;
  trigramMotif: TrigramMotif;
  trigramSymbol: string;
};
