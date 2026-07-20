const MS_PER_DAY = 24 * 60 * 60 * 1000;

export const APP_TIME_ZONE = "America/Vancouver";

const appCalendarDateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: APP_TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const appDateLabelFormatter = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: APP_TIME_ZONE,
});

export type AppCalendarDate = {
  year: number;
  month: number;
  day: number;
};

export function assertValidDate(date: Date, subject: string): void {
  if (Number.isNaN(date.getTime())) {
    throw new RangeError(`Cannot derive ${subject} from an invalid date.`);
  }
}

export function positiveModulo(value: number, divisor: number): number {
  return ((value % divisor) + divisor) % divisor;
}

function readPart(parts: Intl.DateTimeFormatPart[], type: string): number {
  const value = parts.find((part) => part.type === type)?.value;
  const parsed = value === undefined ? Number.NaN : Number.parseInt(value, 10);

  if (!Number.isInteger(parsed)) {
    throw new RangeError(
      `Cannot derive app calendar ${type} in ${APP_TIME_ZONE}.`,
    );
  }

  return parsed;
}

export function getAppCalendarDate(date: Date): AppCalendarDate {
  assertValidDate(date, "an app calendar date");

  const parts = appCalendarDateFormatter.formatToParts(date);

  return {
    year: readPart(parts, "year"),
    month: readPart(parts, "month"),
    day: readPart(parts, "day"),
  };
}

export function getCalendarDayIndex({
  year,
  month,
  day,
}: AppCalendarDate): number {
  return Date.UTC(year, month - 1, day) / MS_PER_DAY;
}

export function getAppDayIndex(date: Date, subject: string): number {
  assertValidDate(date, subject);

  return getCalendarDayIndex(getAppCalendarDate(date));
}

export function formatAppDateLabel(date: Date): string {
  assertValidDate(date, "a date label");

  return appDateLabelFormatter.format(date);
}
