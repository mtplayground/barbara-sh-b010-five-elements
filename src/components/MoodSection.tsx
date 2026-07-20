import type { BaguaTrigram, TrigramMoodAxis } from "../lib/trigrams";

type MoodSectionProps = {
  trigram: BaguaTrigram;
  title: string;
  description: string;
  axes: TrigramMoodAxis[];
};

export function MoodSection({
  trigram,
  title,
  description,
  axes,
}: MoodSectionProps) {
  return (
    <section aria-labelledby="mood-title" className="py-8 sm:py-10">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cinnabar">
            {trigram} mood
          </p>
          <h2 id="mood-title" className="mt-3 font-display text-3xl text-ink-950">
            {title}
          </h2>
        </div>
        <div className="rounded-lg border border-ink-950/10 bg-white/60 p-5">
          <p className="text-base leading-7 text-ink-800">{description}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3" aria-label="Mood axes">
            {axes.map((axis) => (
              <div
                className="rounded-md border border-ink-950/10 bg-paper-50 px-3 py-2 text-center"
                key={`${axis.label}-${axis.value}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-600">
                  {axis.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-800">
                  {axis.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
