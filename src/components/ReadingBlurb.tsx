type ReadingBlurbProps = {
  text: string;
};

export function ReadingBlurb({ text }: ReadingBlurbProps) {
  return (
    <section aria-labelledby="reading-title" className="py-8 sm:py-10">
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cinnabar">
            Daily reading
          </p>
          <h2
            id="reading-title"
            className="mt-3 font-display text-3xl text-ink-950"
          >
            Blended note
          </h2>
        </div>
        <blockquote className="rounded-lg border border-cinnabar/20 bg-white/70 p-6 font-display text-2xl leading-10 text-ink-950">
          {text}
        </blockquote>
      </div>
    </section>
  );
}
