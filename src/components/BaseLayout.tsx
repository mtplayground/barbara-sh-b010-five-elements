import type { PropsWithChildren } from "react";

export function BaseLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen overflow-hidden bg-paper-50 text-ink-950">
      <div className="min-h-screen border-x border-ink-950/10 bg-paper-50 shadow-soft-panel sm:mx-6 lg:mx-12">
        {children}
      </div>
    </main>
  );
}
