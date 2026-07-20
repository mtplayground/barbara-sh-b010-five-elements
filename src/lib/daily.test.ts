import { describe, expect, it } from "vitest";
import { createDailyLayoutContent } from "./daily";
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

function utcDate(dayOffset: number): Date {
  return new Date(Date.UTC(2024, 0, 1 + dayOffset));
}

describe("createDailyLayoutContent", () => {
  it("renders the expected Element, Trigram, guidance, mood, blurb, and accent for simulated dates", () => {
    const simulatedDates = Array.from({ length: 8 }, (_, index) => ({
      date: utcDate(index),
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

  it("cycles through every Element and Trigram over a run of dates", () => {
    const contents = Array.from({ length: 40 }, (_, index) =>
      createDailyLayoutContent(utcDate(index)),
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

  it("keeps the same result for equivalent instants on a UTC day", () => {
    const early = createDailyLayoutContent(
      new Date("2024-02-11T00:15:00.000Z"),
    );
    const late = createDailyLayoutContent(
      new Date("2024-02-11T23:45:00.000Z"),
    );

    expect(late.element).toBe(early.element);
    expect(late.trigram).toBe(early.trigram);
    expect(late.accentColor).toBe(early.accentColor);
    expect(late.trigramSymbol).toBe(early.trigramSymbol);
  });
});
