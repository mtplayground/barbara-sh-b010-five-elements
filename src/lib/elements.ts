const MS_PER_DAY = 24 * 60 * 60 * 1000;
const ELEMENT_ANCHOR_DAY = Date.UTC(2024, 0, 1) / MS_PER_DAY;

export const WU_XING_ELEMENTS = [
  "Wood",
  "Fire",
  "Earth",
  "Metal",
  "Water",
] as const;

export type WuXingElement = (typeof WU_XING_ELEMENTS)[number];

function assertValidDate(date: Date): void {
  if (Number.isNaN(date.getTime())) {
    throw new RangeError("Cannot derive a Five Element from an invalid date.");
  }
}

function positiveModulo(value: number, divisor: number): number {
  return ((value % divisor) + divisor) % divisor;
}

export function getUtcDayIndex(date: Date): number {
  assertValidDate(date);

  return (
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) /
    MS_PER_DAY
  );
}

export function deriveElementFromDate(date: Date): WuXingElement {
  const cycleIndex = positiveModulo(
    getUtcDayIndex(date) - ELEMENT_ANCHOR_DAY,
    WU_XING_ELEMENTS.length,
  );

  return WU_XING_ELEMENTS[cycleIndex];
}

export function deriveTodayElement(): WuXingElement {
  return deriveElementFromDate(new Date());
}
