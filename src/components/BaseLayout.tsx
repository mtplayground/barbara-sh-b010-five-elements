import type { CSSProperties, PropsWithChildren } from "react";

type BaseLayoutProps = PropsWithChildren<{
  accentColor: string;
}>;

export function BaseLayout({ accentColor, children }: BaseLayoutProps) {
  const themeStyle = {
    "--daily-accent": accentColor,
  } as CSSProperties;

  return (
    <main
      className="daily-shell min-h-screen overflow-hidden bg-paper-50 text-ink-950"
      style={themeStyle}
    >
      <div className="page-surface relative min-h-screen overflow-hidden border-x border-ink-950/10 bg-paper-50 shadow-soft-panel sm:mx-6 lg:mx-12">
        {children}
      </div>
    </main>
  );
}
