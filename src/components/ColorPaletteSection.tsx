import type { PaletteSwatch } from "../types";

type ColorPaletteSectionProps = {
  palette: PaletteSwatch[];
  fabricNote: string;
};

export function ColorPaletteSection({
  palette,
  fabricNote,
}: ColorPaletteSectionProps) {
  return (
    <section aria-labelledby="color-palette-title" className="py-8 sm:py-10">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cinnabar">
            Color palette
          </p>
          <h2
            id="color-palette-title"
            className="mt-3 font-display text-3xl text-ink-950"
          >
            Colors and fabric
          </h2>
        </div>
        <div className="grid gap-5">
          <div className="grid gap-3 sm:grid-cols-3">
            {palette.map((swatch) => (
              <div
                className="rounded-lg border border-ink-950/10 bg-white/60 p-3"
                key={swatch.name}
              >
                <div
                  aria-hidden="true"
                  className="h-20 rounded-md border border-ink-950/10"
                  style={{ backgroundColor: swatch.value }}
                />
                <p className="mt-3 text-sm font-semibold text-ink-950">
                  {swatch.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ink-600">
                  {swatch.value}
                </p>
              </div>
            ))}
          </div>
          <p className="rounded-lg border border-ink-950/10 bg-paper-100 p-5 text-base leading-7 text-ink-800">
            {fabricNote}
          </p>
        </div>
      </div>
    </section>
  );
}
