import { getUtcDayIndex, positiveModulo } from "./date";

const TRIGRAM_ANCHOR_DAY = Date.UTC(2024, 0, 1) / (24 * 60 * 60 * 1000);

export const BAGUA_TRIGRAMS = [
  "Qian",
  "Kun",
  "Zhen",
  "Xun",
  "Kan",
  "Li",
  "Gen",
  "Dui",
] as const;

export type BaguaTrigram = (typeof BAGUA_TRIGRAMS)[number];

export function deriveTrigramFromDate(date: Date): BaguaTrigram {
  const cycleIndex = positiveModulo(
    getUtcDayIndex(date, "a Trigram") - TRIGRAM_ANCHOR_DAY,
    BAGUA_TRIGRAMS.length,
  );

  return BAGUA_TRIGRAMS[cycleIndex];
}

export function deriveTodayTrigram(): BaguaTrigram {
  return deriveTrigramFromDate(new Date());
}
