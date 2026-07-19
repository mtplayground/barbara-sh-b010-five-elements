type MoodSectionProps = {
  title: string;
  description: string;
};

export function MoodSection({ title, description }: MoodSectionProps) {
  return (
    <section aria-labelledby="mood-title" className="py-8 sm:py-10">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cinnabar">
            Style mood
          </p>
          <h2 id="mood-title" className="mt-3 font-display text-3xl text-ink-950">
            {title}
          </h2>
        </div>
        <div className="rounded-lg border border-ink-950/10 bg-white/60 p-5">
          <p className="text-base leading-7 text-ink-800">{description}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3" aria-label="Mood axes">
            {["Structured", "Calm", "Grounded"].map((axis) => (
              <span
                className="rounded-md border border-ink-950/10 bg-paper-50 px-3 py-2 text-center text-sm font-semibold text-ink-800"
                key={axis}
              >
                {axis}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
