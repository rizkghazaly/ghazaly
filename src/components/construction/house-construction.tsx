import { Pause, Play, RotateCcw, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BuildScene } from "./BuildScene";
import { DURATION, PHASES, phaseAt } from "./phases";
import { useConstructionTimeline } from "./use-construction-timeline";

export function HouseConstruction() {
  const { time, playing, seek, replay, toggle, containerRef } = useConstructionTimeline();
  const phaseIndex = phaseAt(time);
  const phase = PHASES[phaseIndex];
  return (
    <div ref={containerRef} className="construction-scene" data-construction-time={time.toFixed(2)}>
      <div className="construction-stage relative overflow-hidden">
        <svg viewBox="0 30 1000 690" className="block h-auto w-full" role="img" aria-label="House construction from an empty plot to a completed three-storey home">
          <BuildScene p={time} />
        </svg>
      </div>
      <div className="mx-auto max-w-[1100px] px-6 pb-8 pt-6 sm:px-10">
        <div className="flex min-h-12 items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[10px] uppercase text-muted-foreground">{String(phaseIndex + 1).padStart(2, "0")} / {PHASES.length} — Construction</p>
            <p className="mt-1 text-base font-medium sm:text-lg">{phase?.title}</p>
          </div>
          <div className="flex shrink-0 gap-1">
            <Button variant="secondary" size="icon" onClick={toggle} aria-label={playing ? "Pause construction" : "Play construction"} title={playing ? "Pause" : "Play"}>{playing ? <Pause /> : <Play />}</Button>
            <Button variant="ghost" size="icon" onClick={replay} aria-label="Replay construction" title="Replay"><RotateCcw /></Button>
            <Button variant="ghost" size="icon" onClick={() => seek(DURATION)} aria-label="Show completed house" title="Show completed house"><SkipForward /></Button>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-4">
          <input type="range" min="0" max={DURATION} step="0.05" value={time} onChange={(event) => seek(Number(event.target.value))} aria-label="Construction timeline" aria-valuetext={`${phase?.title ?? "Construction"}, ${Math.round(time)} seconds`} className="h-5 min-w-0 flex-1 cursor-pointer accent-primary" />
          <span className="w-16 shrink-0 text-right font-mono text-[11px] text-muted-foreground">{String(Math.floor(time)).padStart(2, "0")} / {DURATION}s</span>
        </div>
      </div>
    </div>
  );
}