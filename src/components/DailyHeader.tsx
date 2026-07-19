type DailyHeaderProps = {
  dateLabel: string;
  element: string;
  trigram: string;
};

export function DailyHeader({ dateLabel, element, trigram }: DailyHeaderProps) {
  return (
    <header className="grid gap-8 py-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cinnabar">
          {dateLabel}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight text-ink-950 sm:text-5xl">
          Five Element and Trigram style reading
        </h1>
      </div>
      <dl className="grid gap-3 sm:grid-cols-2 lg:w-72 lg:grid-cols-1">
        <div className="rounded-lg border border-ink-950/10 bg-white/60 p-4">
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-600">
            Element
          </dt>
          <dd className="mt-2 font-display text-3xl text-ink-950">{element}</dd>
        </div>
        <div className="rounded-lg border border-ink-950/10 bg-white/60 p-4">
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-600">
            Trigram
          </dt>
          <dd className="mt-2 font-display text-3xl text-ink-950">{trigram}</dd>
        </div>
      </dl>
    </header>
  );
}
