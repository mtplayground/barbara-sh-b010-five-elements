export type PaletteSwatch = {
  name: string;
  value: string;
};

export type DailyLayoutContent = {
  dateLabel: string;
  element: string;
  trigram: string;
  palette: PaletteSwatch[];
  fabricNote: string;
  moodTitle: string;
  moodDescription: string;
  blurb: string;
};
