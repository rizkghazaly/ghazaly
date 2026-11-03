import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Full page shell for standalone project routes; a plain block when shown inside the homepage. */
export function ExteriorShell({ embedded, children }: { embedded: boolean; children: ReactNode }) {
  if (embedded)
    return (
      <div className="relative py-6 even:bg-foreground/[0.025] first:pt-0">
        <div
          aria-hidden="true"
          className="mx-auto mb-2 h-px max-w-[1200px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent [div:first-child>&]:hidden"
        />
        {children}
      </div>
    );
  return (
    <main className="site-shell relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      {children}
    </main>
  );
}

/** h1 on standalone pages, h3 when embedded in the homepage list (with a soft tonal gradient). */
export function ExteriorHeading({ embedded, className, ...props }: { embedded: boolean } & ComponentProps<"h1">) {
  if (!embedded) return <h1 className={className} {...props} />;
  return (
    <h3
      className={cn(
        className,
        "bg-gradient-to-r from-foreground via-foreground/85 to-muted-foreground bg-clip-text italic text-transparent",
      )}
      {...props}
    />
  );
}
