import type { ElementGuidance, WuXingElement } from "./elements";
import type { BaguaTrigram, TrigramTheme } from "./trigrams";

type ElementReadingTone = {
  current: string;
  stylingMove: string;
};

type TrigramReadingTone = {
  current: string;
  stylingMove: string;
};

const ELEMENT_READING_TONES: Record<WuXingElement, ElementReadingTone> = {
  Wood: {
    current: "growth, freshness, and a little upward lift",
    stylingMove: "keep the silhouette breathable and alive",
  },
  Fire: {
    current: "spark, confidence, and a brighter pulse",
    stylingMove: "let one structured statement piece lead",
  },
  Earth: {
    current: "steadiness, warmth, and practical ease",
    stylingMove: "anchor the outfit with tactile weight",
  },
  Metal: {
    current: "clarity, polish, and clean definition",
    stylingMove: "sharpen the edges with crisp finishing touches",
  },
  Water: {
    current: "depth, flow, and quiet intuition",
    stylingMove: "let layers move softly together",
  },
};

const TRIGRAM_READING_TONES: Record<BaguaTrigram, TrigramReadingTone> = {
  Qian: {
    current: "a decisive skyward push",
    stylingMove: "choose the version that feels most composed",
  },
  Kun: {
    current: "a receptive, steady field",
    stylingMove: "leave room for comfort and softness",
  },
  Zhen: {
    current: "a wake-up spark",
    stylingMove: "add one lively detail that starts the conversation",
  },
  Xun: {
    current: "a graceful breeze",
    stylingMove: "favor movement over fuss",
  },
  Kan: {
    current: "a deep-water hush",
    stylingMove: "trust subtle contrast and protective layers",
  },
  Li: {
    current: "a clear little flame",
    stylingMove: "place brightness where you want attention",
  },
  Gen: {
    current: "a mountain-still pause",
    stylingMove: "keep the look intentional and settled",
  },
  Dui: {
    current: "an open, easy gleam",
    stylingMove: "finish with a detail that feels inviting",
  },
};

function listPaletteNames(guidance: ElementGuidance): string {
  const [first, second] = guidance.palette;

  return `${first.name.toLowerCase()} and ${second.name.toLowerCase()}`;
}

export function createDailyReadingBlurb(
  elementGuidance: ElementGuidance,
  trigramTheme: TrigramTheme,
): string {
  const elementTone = ELEMENT_READING_TONES[elementGuidance.element];
  const trigramTone = TRIGRAM_READING_TONES[trigramTheme.trigram];
  const paletteNames = listPaletteNames(elementGuidance);

  return `${elementGuidance.element} brings ${elementTone.current}, while ${trigramTheme.trigram} adds ${trigramTone.current}. Work with ${paletteNames}, ${elementTone.stylingMove}, and ${trigramTone.stylingMove}.`;
}
