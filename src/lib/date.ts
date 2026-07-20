const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function assertValidDate(date: Date, subject: string): void {
  if (Number.isNaN(date.getTime())) {
    throw new RangeError(`Cannot derive ${subject} from an invalid date.`);
  }
}

export function positiveModulo(value: number, divisor: number): number {
  return ((value % divisor) + divisor) % divisor;
}

export function getUtcDayIndex(date: Date, subject: string): number {
  assertValidDate(date, subject);

  return (
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) /
    MS_PER_DAY
  );
}
