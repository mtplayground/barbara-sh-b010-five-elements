import { BaseLayout } from "./components/BaseLayout";
import { ColorPaletteSection } from "./components/ColorPaletteSection";
import { DailyHeader } from "./components/DailyHeader";
import { MoodSection } from "./components/MoodSection";
import { ReadingBlurb } from "./components/ReadingBlurb";
import { VisualAccent } from "./components/VisualAccent";
import { createDailyLayoutContent } from "./lib/daily";

const dailyReading = createDailyLayoutContent();

export default function App() {
  return (
    <BaseLayout accentColor={dailyReading.accentColor}>
      <VisualAccent
        accentColor={dailyReading.accentColor}
        motif={dailyReading.trigramMotif}
      />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col px-5 py-8 sm:px-8 sm:py-12 lg:px-10">
        <DailyHeader
          dateLabel={dailyReading.dateLabel}
          element={dailyReading.element}
          trigram={dailyReading.trigram}
          trigramSymbol={dailyReading.trigramSymbol}
        />
        <div className="mt-10 divide-y divide-ink-950/10 border-y border-ink-950/10">
          <ColorPaletteSection
            element={dailyReading.element}
            palette={dailyReading.palette}
            fabricNote={dailyReading.fabricNote}
          />
          <MoodSection
            trigram={dailyReading.trigram}
            title={dailyReading.moodTitle}
            description={dailyReading.moodDescription}
            axes={dailyReading.moodAxes}
          />
          <ReadingBlurb
            element={dailyReading.element}
            trigram={dailyReading.trigram}
            text={dailyReading.blurb}
          />
        </div>
      </div>
    </BaseLayout>
  );
}
