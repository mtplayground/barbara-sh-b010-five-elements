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

export type TrigramMoodAxis = {
  label: string;
  value: string;
};

export type TrigramTheme = {
  trigram: BaguaTrigram;
  title: string;
  description: string;
  axes: TrigramMoodAxis[];
};

export type TrigramLine = "solid" | "broken";

export type TrigramMotif = {
  trigram: BaguaTrigram;
  symbol: string;
  lines: [TrigramLine, TrigramLine, TrigramLine];
};

export const TRIGRAM_MOTIFS: Record<BaguaTrigram, TrigramMotif> = {
  Qian: { trigram: "Qian", symbol: "☰", lines: ["solid", "solid", "solid"] },
  Kun: { trigram: "Kun", symbol: "☷", lines: ["broken", "broken", "broken"] },
  Zhen: { trigram: "Zhen", symbol: "☳", lines: ["broken", "broken", "solid"] },
  Xun: { trigram: "Xun", symbol: "☴", lines: ["solid", "solid", "broken"] },
  Kan: { trigram: "Kan", symbol: "☵", lines: ["broken", "solid", "broken"] },
  Li: { trigram: "Li", symbol: "☲", lines: ["solid", "broken", "solid"] },
  Gen: { trigram: "Gen", symbol: "☶", lines: ["solid", "broken", "broken"] },
  Dui: { trigram: "Dui", symbol: "☱", lines: ["broken", "solid", "solid"] },
};

export const TRIGRAM_THEMES: Record<BaguaTrigram, TrigramTheme> = {
  Qian: {
    trigram: "Qian",
    title: "Strong and structured",
    description:
      "Qian brings a clean, decisive mood: tailored lines, confident contrast, and pieces that feel composed from the first layer.",
    axes: [
      { label: "Shape", value: "Structured" },
      { label: "Energy", value: "Bold" },
      { label: "Tone", value: "Commanding" },
    ],
  },
  Kun: {
    trigram: "Kun",
    title: "Soft and receptive",
    description:
      "Kun favors ease and openness: generous layers, gentle shapes, and a grounded look that feels quietly supportive.",
    axes: [
      { label: "Shape", value: "Soft" },
      { label: "Energy", value: "Calm" },
      { label: "Tone", value: "Grounded" },
    ],
  },
  Zhen: {
    trigram: "Zhen",
    title: "Awake and expressive",
    description:
      "Zhen carries movement and spark: fresh proportions, lively accents, and one clear detail that wakes up the outfit.",
    axes: [
      { label: "Shape", value: "Active" },
      { label: "Energy", value: "Bold" },
      { label: "Tone", value: "Expressive" },
    ],
  },
  Xun: {
    trigram: "Xun",
    title: "Fluid and refined",
    description:
      "Xun suggests graceful flow: light layers, softened structure, and details that feel polished without becoming rigid.",
    axes: [
      { label: "Shape", value: "Soft" },
      { label: "Energy", value: "Calm" },
      { label: "Tone", value: "Refined" },
    ],
  },
  Kan: {
    trigram: "Kan",
    title: "Calm and grounded",
    description:
      "Kan points toward depth and stillness: quiet contrasts, protective layers, and textures that settle the whole look.",
    axes: [
      { label: "Shape", value: "Layered" },
      { label: "Energy", value: "Calm" },
      { label: "Tone", value: "Grounded" },
    ],
  },
  Li: {
    trigram: "Li",
    title: "Bright and expressive",
    description:
      "Li asks for clarity and glow: sharper highlights, visible focal points, and styling choices that catch the light.",
    axes: [
      { label: "Shape", value: "Defined" },
      { label: "Energy", value: "Bright" },
      { label: "Tone", value: "Expressive" },
    ],
  },
  Gen: {
    trigram: "Gen",
    title: "Still and grounded",
    description:
      "Gen keeps the mood steady: compact shapes, sturdy pieces, and deliberate styling that feels settled rather than busy.",
    axes: [
      { label: "Shape", value: "Structured" },
      { label: "Energy", value: "Calm" },
      { label: "Tone", value: "Grounded" },
    ],
  },
  Dui: {
    trigram: "Dui",
    title: "Open and polished",
    description:
      "Dui brings a lighter social note: relaxed polish, pleasing details, and a softer finish that still feels intentional.",
    axes: [
      { label: "Shape", value: "Soft" },
      { label: "Energy", value: "Open" },
      { label: "Tone", value: "Expressive" },
    ],
  },
};

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

export function getTrigramTheme(trigram: BaguaTrigram): TrigramTheme {
  return TRIGRAM_THEMES[trigram];
}

export function getTrigramMotif(trigram: BaguaTrigram): TrigramMotif {
  return TRIGRAM_MOTIFS[trigram];
}
