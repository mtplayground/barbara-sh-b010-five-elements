import { formatAppDateLabel } from "./date";
import { deriveElementFromDate, getElementGuidance } from "./elements";
import { createDailyReadingBlurb } from "./reading";
import {
  deriveTrigramFromDate,
  getTrigramMotif,
  getTrigramTheme,
} from "./trigrams";
import type { DailyLayoutContent } from "../types";

function getAccentColor(content: Pick<DailyLayoutContent, "palette">): string {
  const [accentSwatch] = content.palette;

  if (!accentSwatch) {
    throw new Error("Daily content requires at least one palette swatch.");
  }

  return accentSwatch.value;
}

export function createDailyLayoutContent(date = new Date()): DailyLayoutContent {
  const element = deriveElementFromDate(date);
  const elementGuidance = getElementGuidance(element);
  const trigram = deriveTrigramFromDate(date);
  const trigramTheme = getTrigramTheme(trigram);
  const trigramMotif = getTrigramMotif(trigram);
  const baseContent = {
    dateLabel: formatAppDateLabel(date),
    element,
    trigram,
    palette: elementGuidance.palette,
    fabricNote: elementGuidance.fabricNote,
    moodTitle: trigramTheme.title,
    moodDescription: trigramTheme.description,
    moodAxes: trigramTheme.axes,
    blurb: createDailyReadingBlurb(elementGuidance, trigramTheme),
    trigramMotif,
    trigramSymbol: trigramMotif.symbol,
  };

  return {
    ...baseContent,
    accentColor: getAccentColor(baseContent),
  };
}
