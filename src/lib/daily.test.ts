import { describe, expect, it } from "vitest";
import { createDailyLayoutContent } from "./daily";
import { APP_TIME_ZONE, getAppCalendarDate } from "./date";
import {
  getElementGuidance,
  WU_XING_ELEMENTS,
  type WuXingElement,
} from "./elements";
import {
  BAGUA_TRIGRAMS,
  getTrigramMotif,
  getTrigramTheme,
  type BaguaTrigram,
} from "./trigrams";

function vancouverNoonDate(dayOffset: number): Date {
  // 20:00Z is safely within the same America/Vancouver calendar day for both
  // standard time and daylight saving time.
  return new Date(Date.UTC(2024, 0, 1 + dayOffset, 20));
}

describe("createDailyLayoutContent", () => {
  it("renders the expected Element, Trigram, guidance, mood, blurb, and accent for Vancouver calendar days", () => {
    const simulatedDates = Array.from({ length: 8 }, (_, index) => ({
      date: vancouverNoonDate(index),
      element: WU_XING_ELEMENTS[index % WU_XING_ELEMENTS.length],
      trigram: BAGUA_TRIGRAMS[index % BAGUA_TRIGRAMS.length],
    }));

    for (const expected of simulatedDates) {
      const content = createDailyLayoutContent(expected.date);
      const elementGuidance = getElementGuidance(expected.element);
      const trigramTheme = getTrigramTheme(expected.trigram);
      const trigramMotif = getTrigramMotif(expected.trigram);

      expect(content.element).toBe(expected.element);
      expect(content.trigram).toBe(expected.trigram);
      expect(content.palette).toEqual(elementGuidance.palette);
      expect(content.fabricNote).toBe(elementGuidance.fabricNote);
      expect(content.moodTitle).toBe(trigramTheme.title);
      expect(content.moodDescription).toBe(trigramTheme.description);
      expect(content.moodAxes).toEqual(trigramTheme.axes);
      expect(content.accentColor).toBe(elementGuidance.palette[0].value);
      expect(content.trigramMotif).toEqual(trigramMotif);
      expect(content.trigramSymbol).toBe(trigramMotif.symbol);
      expect(content.blurb).toContain(expected.element);
      expect(content.blurb).toContain(expected.trigram);
      expect(content.blurb).toContain(
        elementGuidance.palette[0].name.toLowerCase(),
      );
    }
  });

  it("cycles through every Element and Trigram over a run of Vancouver dates", () => {
    const contents = Array.from({ length: 40 }, (_, index) =>
      createDailyLayoutContent(vancouverNoonDate(index)),
    );
    const renderedElements = new Set<WuXingElement>(
      contents.map((content) => content.element),
    );
    const renderedTrigrams = new Set<BaguaTrigram>(
      contents.map((content) => content.trigram),
    );

    expect(renderedElements).toEqual(new Set(WU_XING_ELEMENTS));
    expect(renderedTrigrams).toEqual(new Set(BAGUA_TRIGRAMS));
  });

  it("uses the same Vancouver day for the label, Element, Trigram, and visual data even when the UTC date differs", () => {
    const beforeUtcMidnight = createDailyLayoutContent(
      new Date("2024-02-11T23:45:00.000Z"),
    );
    const afterUtcMidnight = createDailyLayoutContent(
      new Date("2024-02-12T07:45:00.000Z"),
    );

    expect(APP_TIME_ZONE).toBe("America/Vancouver");
    expect(beforeUtcMidnight.dateLabel).toBe("Sunday, February 11, 2024");
    expect(afterUtcMidnight.dateLabel).toBe("Sunday, February 11, 2024");
    expect(afterUtcMidnight.element).toBe(beforeUtcMidnight.element);
    expect(afterUtcMidnight.trigram).toBe(beforeUtcMidnight.trigram);
    expect(afterUtcMidnight.accentColor).toBe(beforeUtcMidnight.accentColor);
    expect(afterUtcMidnight.trigramSymbol).toBe(
      beforeUtcMidnight.trigramSymbol,
    );
  });

  it("rolls over exactly at Vancouver local midnight rather than UTC midnight", () => {
    const lastMomentOfVancouverDay = new Date("2024-02-12T07:59:59.000Z");
    const firstMomentOfNextVancouverDay = new Date("2024-02-12T08:00:00.000Z");

    expect(getAppCalendarDate(lastMomentOfVancouverDay)).toEqual({
      year: 2024,
      month: 2,
      day: 11,
    });
    expect(getAppCalendarDate(firstMomentOfNextVancouverDay)).toEqual({
      year: 2024,
      month: 2,
      day: 12,
    });

    const beforeRollover = createDailyLayoutContent(lastMomentOfVancouverDay);
    const afterRollover = createDailyLayoutContent(firstMomentOfNextVancouverDay);

    expect(beforeRollover.dateLabel).toBe("Sunday, February 11, 2024");
    expect(afterRollover.dateLabel).toBe("Monday, February 12, 2024");
    expect(afterRollover.element).not.toBe(beforeRollover.element);
    expect(afterRollover.trigram).not.toBe(beforeRollover.trigram);
  });
});
