import { BaseLayout } from "./components/BaseLayout";
import { ColorPaletteSection } from "./components/ColorPaletteSection";
import { DailyHeader } from "./components/DailyHeader";
import { MoodSection } from "./components/MoodSection";
import { ReadingBlurb } from "./components/ReadingBlurb";
import { deriveTodayElement } from "./lib/elements";
import type { DailyLayoutContent } from "./types";

const dateFormatter = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const placeholderReading: DailyLayoutContent = {
  dateLabel: dateFormatter.format(new Date()),
  element: deriveTodayElement(),
  trigram: "Qian",
  palette: [
    { name: "Leaf green", value: "#3f7d4a" },
    { name: "Soft moss", value: "#8ea982" },
    { name: "Ink pine", value: "#1e3d32" },
  ],
  fabricNote:
    "Placeholder fabric guidance will describe the day's textures and silhouette.",
  moodTitle: "Structured and fresh",
  moodDescription:
    "Placeholder mood guidance will translate the day's Trigram into a wearable tone.",
  blurb:
    "A short blended reading will connect the day's Element and Trigram once the date logic and guidance maps are added.",
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
            palette={placeholderReading.palette}
            fabricNote={placeholderReading.fabricNote}
          />
          <MoodSection
            title={placeholderReading.moodTitle}
            description={placeholderReading.moodDescription}
          />
          <ReadingBlurb text={placeholderReading.blurb} />
        </div>
      </div>
    </BaseLayout>
  );
}
