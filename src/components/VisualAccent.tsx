import type { TrigramMotif } from "../lib/trigrams";

type VisualAccentProps = {
  accentColor: string;
  motif: TrigramMotif;
};

export function VisualAccent({ accentColor, motif }: VisualAccentProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-0 h-72 w-72 overflow-hidden sm:h-96 sm:w-96"
    >
      <svg
        className="h-full w-full"
        role="presentation"
        viewBox="0 0 360 360"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M84 54 C170 16 281 48 309 126 C338 209 259 299 158 307 C83 313 35 259 51 191 C62 143 37 104 84 54"
          fill="none"
          opacity="0.18"
          stroke={accentColor}
          strokeLinecap="round"
          strokeWidth="22"
        />
        <path
          d="M117 83 C194 55 272 82 293 140 C316 203 251 270 167 281 C102 289 66 244 77 194 C88 147 72 110 117 83"
          fill={accentColor}
          opacity="0.06"
        />
        <text
          fill={accentColor}
          fontFamily="Fraunces, Georgia, serif"
          fontSize="104"
          opacity="0.15"
          x="210"
          y="136"
        >
          {motif.symbol}
        </text>
        <g fill={accentColor} opacity="0.52" transform="translate(205 186)">
          {motif.lines.map((line, index) => {
            const y = index * 30;

            if (line === "solid") {
              return (
                <rect height="8" key={index} rx="4" width="96" x="0" y={y} />
              );
            }

            return (
              <g key={index}>
                <rect height="8" rx="4" width="38" x="0" y={y} />
                <rect height="8" rx="4" width="38" x="58" y={y} />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
