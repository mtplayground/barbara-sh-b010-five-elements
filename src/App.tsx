import { BaseLayout } from "./components/BaseLayout";
import { ColorPaletteSection } from "./components/ColorPaletteSection";
import { DailyHeader } from "./components/DailyHeader";
import { MoodSection } from "./components/MoodSection";
import { ReadingBlurb } from "./components/ReadingBlurb";
import { deriveTodayElement, getElementGuidance } from "./lib/elements";
import { createDailyReadingBlurb } from "./lib/reading";
import { deriveTodayTrigram, getTrigramTheme } from "./lib/trigrams";
import type { DailyLayoutContent } from "./types";

const dateFormatter = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const todayElement = deriveTodayElement();
const elementGuidance = getElementGuidance(todayElement);
const todayTrigram = deriveTodayTrigram();
const trigramTheme = getTrigramTheme(todayTrigram);

const placeholderReading: DailyLayoutContent = {
  dateLabel: dateFormatter.format(new Date()),
  element: todayElement,
  trigram: todayTrigram,
  palette: elementGuidance.palette,
  fabricNote: elementGuidance.fabricNote,
  moodTitle: trigramTheme.title,
  moodDescription: trigramTheme.description,
  moodAxes: trigramTheme.axes,
  blurb: createDailyReadingBlurb(elementGuidance, trigramTheme),
};

export default function App() {
  return (
    <BaseLayout>
      <div className="mx-auto flex w-full max-w-5xl flex-col px-5 py-8 sm:px-8 sm:py-12 lg:px-10">
        <DailyHeader
          dateLabel={placeholderReading.dateLabel}
          element={placeholderReading.element}
          trigram={placeholderReading.trigram}
        />
        <div className="mt-10 divide-y divide-ink-950/10 border-y border-ink-950/10">
          <ColorPaletteSection
            element={placeholderReading.element}
            palette={placeholderReading.palette}
            fabricNote={placeholderReading.fabricNote}
          />
          <MoodSection
            trigram={placeholderReading.trigram}
            title={placeholderReading.moodTitle}
            description={placeholderReading.moodDescription}
            axes={placeholderReading.moodAxes}
          />
          <ReadingBlurb
            element={placeholderReading.element}
            trigram={placeholderReading.trigram}
            text={placeholderReading.blurb}
          />
        </div>
      </div>
    </BaseLayout>
  );
}
