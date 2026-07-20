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

export type ElementPaletteSwatch = {
  name: string;
  value: string;
};

export type ElementGuidance = {
  element: WuXingElement;
  palette: ElementPaletteSwatch[];
  fabricNote: string;
};

export const ELEMENT_GUIDANCE: Record<WuXingElement, ElementGuidance> = {
  Wood: {
    element: "Wood",
    palette: [
      { name: "Fresh leaf", value: "#4f8f57" },
      { name: "Bamboo shoot", value: "#a8bf87" },
      { name: "Deep cedar", value: "#244536" },
    ],
    fabricNote:
      "Choose fresh, breathable textures: crisp cotton, raw linen, ribbed knits, and pieces with an easy vertical line.",
  },
  Fire: {
    element: "Fire",
    palette: [
      { name: "Cinnabar", value: "#c43f28" },
      { name: "Persimmon", value: "#e06a2f" },
      { name: "Charcoal ember", value: "#2b2020" },
    ],
    fabricNote:
      "Lean into bold structure: sharp jackets, clean hems, polished cotton sateen, compact wool, and confident accent pieces.",
  },
  Earth: {
    element: "Earth",
    palette: [
      { name: "Ochre", value: "#c9953f" },
      { name: "Clay", value: "#9c6042" },
      { name: "Warm umber", value: "#5a3f2c" },
    ],
    fabricNote:
      "Keep it grounded with tactile weight: brushed cotton, twill, suede-like finishes, soft denim, and relaxed layers.",
  },
  Metal: {
    element: "Metal",
    palette: [
      { name: "Pearl", value: "#f3f1ea" },
      { name: "Silver grey", value: "#aeb4b8" },
      { name: "Graphite", value: "#3d4448" },
    ],
    fabricNote:
      "Aim for crisp refinement: poplin, smooth wool, pleats, precise tailoring, and small metallic accents with a clean edge.",
  },
  Water: {
    element: "Water",
    palette: [
      { name: "Deep navy", value: "#162a44" },
      { name: "Blue black", value: "#0f161d" },
      { name: "Mist blue", value: "#7d95a9" },
    ],
    fabricNote:
      "Favor movement and softness: draped knits, silk-like layers, fluid trousers, fine jersey, and tonal pieces that flow together.",
  },
};

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

export function getElementGuidance(element: WuXingElement): ElementGuidance {
  return ELEMENT_GUIDANCE[element];
}
