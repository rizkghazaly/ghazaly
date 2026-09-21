import { useCallback, useEffect } from "react";
import { X } from "lucide-react";

export type LightboxItem = {
  src: string;
  alt: string;
  caption?: string;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onNavigate?: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null && index >= 0 && index < items.length;
  const item = open ? items[index] : null;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (!onNavigate || index === null) return;
      if (event.key === "ArrowRight" && index < items.length - 1) onNavigate(index + 1);
      if (event.key === "ArrowLeft" && index > 0) onNavigate(index - 1);
    },
    [index, items.length, onClose, onNavigate],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open || !item) return null;

  const showArrows = Boolean(onNavigate) && items.length > 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-background/85 p-4 backdrop-blur-md sm:p-10"
    >
      <button
        type="button"
        aria-label="Close image"
        onClick={onClose}
        className="glass absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-foreground/70 sm:right-6 sm:top-6"
      >
        <X size={18} aria-hidden="true" />
      </button>

      {showArrows && index !== null && index > 0 ? (
        <button
          type="button"
          aria-label="Previous image"
          onClick={(event) => {
            event.stopPropagation();
            onNavigate?.(index - 1);
          }}
          className="glass absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-foreground sm:flex"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ) : null}

      {showArrows && index !== null && index < items.length - 1 ? (
        <button
          type="button"
          aria-label="Next image"
          onClick={(event) => {
            event.stopPropagation();
            onNavigate?.(index + 1);
          }}
          className="glass absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-foreground sm:flex"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ) : null}

      <figure
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-full max-w-6xl cursor-default flex-col items-center"
      >
        <img
          src={item.src}
          alt={item.alt}
          className="glass max-h-[78vh] w-auto max-w-full rounded-[22px] object-contain p-2"
        />
        {item.caption ? (
          <figcaption className="mt-4 max-w-2xl text-center text-sm leading-6 text-muted-foreground">
            {item.caption}
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}
