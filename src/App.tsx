import { BaseLayout } from "./components/BaseLayout";

export default function App() {
  return (
    <BaseLayout>
      <section className="mx-auto flex min-h-[56vh] w-full max-w-3xl flex-col justify-center gap-6 px-6 py-16 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cinnabar">
          Browser-only daily guide
        </p>
        <h1 className="font-display text-4xl text-ink-950 sm:text-5xl">
          Five Element and Trigram style readings
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
          A calm daily canvas for color guidance, texture notes, mood, and a
          short reading shaped by the date.
        </p>
      </section>
    </BaseLayout>
  );
}
