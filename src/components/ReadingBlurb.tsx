import type { WuXingElement } from "../lib/elements";
import type { BaguaTrigram } from "../lib/trigrams";

type ReadingBlurbProps = {
  element: WuXingElement;
  trigram: BaguaTrigram;
  text: string;
};

export function ReadingBlurb({ element, trigram, text }: ReadingBlurbProps) {
  return (
    <section aria-labelledby="reading-title" className="py-8 sm:py-10">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--daily-accent)]">
            {element} + {trigram}
          </p>
          <h2
            id="reading-title"
            className="mt-3 font-display text-3xl text-ink-950"
          >
            Blended note
          </h2>
        </div>
        <blockquote className="rounded-lg border border-[color:var(--daily-accent)] bg-white/70 p-5 font-display text-xl leading-8 text-ink-950 sm:p-6 sm:text-2xl sm:leading-10">
          {text}
        </blockquote>
      </div>
    </section>
  );
}
