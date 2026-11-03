import type { ComponentProps, ReactNode } from "react";

/** Full page shell for standalone project routes; a plain block when shown inside the homepage. */
export function ExteriorShell({ embedded, children }: { embedded: boolean; children: ReactNode }) {
  if (embedded) return <div className="relative border-t border-border first:border-t-0">{children}</div>;
  return (
    <main className="site-shell relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      {children}
    </main>
  );
}

/** h1 on standalone pages, h3 when embedded in the homepage list. */
export function ExteriorHeading({ embedded, ...props }: { embedded: boolean } & ComponentProps<"h1">) {
  return embedded ? <h3 {...props} /> : <h1 {...props} />;
}
