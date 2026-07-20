import { getUtcDayIndex, positiveModulo } from "./date";

const ELEMENT_ANCHOR_DAY = Date.UTC(2024, 0, 1) / (24 * 60 * 60 * 1000);

export const WU_XING_ELEMENTS = [
  "Wood",
  "Fire",
  "Earth",
  "Metal",
  "Water",
] as const;

export type WuXingElement = (typeof WU_XING_ELEMENTS)[number];

export function deriveElementFromDate(date: Date): WuXingElement {
  const cycleIndex = positiveModulo(
    getUtcDayIndex(date, "a Five Element") - ELEMENT_ANCHOR_DAY,
    WU_XING_ELEMENTS.length,
  );

  return WU_XING_ELEMENTS[cycleIndex];
}

export function deriveTodayElement(): WuXingElement {
  return deriveElementFromDate(new Date());
}
