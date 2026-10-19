import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BuildScene } from "./BuildScene";
import { DURATION } from "./phases";
import { SceneSun } from "./Backdrop";
import { seg } from "./helpers";

export function HouseAnimation() {
  const element = useRef<HTMLDivElement>(null);
  const clock = useRef(3);
  const [time, setTime] = useState(3);
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(preference.matches);
      if (preference.matches) {
        clock.current = DURATION;
        setTime(DURATION);
        setPlaying(false);
      }
    };
    update();
    preference.addEventListener("change", update);
    const node = element.current;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry?.isIntersecting ?? false));
    if (node) observer.observe(node);
    return () => {
      preference.removeEventListener("change", update);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!playing || !visible || reduced) return;
    let frame = 0;
    let previous = performance.now();
    const advance = (now: number) => {
      clock.current += Math.min((now - previous) / 1000, 0.1) * 1.5;
      previous = now;
      if (clock.current >= DURATION) clock.current = 3;
      setTime(clock.current);
      frame = requestAnimationFrame(advance);
    };
    frame = requestAnimationFrame(advance);
    return () => cancelAnimationFrame(frame);
  }, [playing, visible, reduced]);

  const replay = () => {
    clock.current = 3;
    setTime(3);
    setPlaying(true);
  };

  const dawn = 1 - seg(time, 0, 14);
  const sunset = seg(time, 24, DURATION);
  const skyTop = `color-mix(in oklab, var(--house-sky-day) ${(1 - sunset) * 100}%, var(--house-sky-dusk))`;
  const skyHorizon = `color-mix(in oklab, var(--house-sky-horizon) ${(1 - dawn) * 100}%, var(--house-sky-dawn))`;

  return (
    <div ref={element} className="house-animation">
      <svg viewBox="0 50 1100 680" preserveAspectRatio="xMidYMax meet" className="house-scenery h-full w-full" role="img" aria-label="House construction with Rizk Ghazaly’s name assembled above the rooftop">
        <defs><linearGradient id="houseSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={skyTop} stopOpacity={0.75} /><stop offset="1" stopColor={skyHorizon} stopOpacity={0.9} /></linearGradient></defs>
        <rect x={-200} y={0} width={1500} height={620} fill="url(#houseSky)" />
        <BuildScene p={time} />
        <rect x={-200} y={0} width={1500} height={780} fill="var(--house-sky-dawn)" opacity={dawn * 0.14} pointerEvents="none" />
      </svg>
      <svg viewBox="0 50 1100 680" preserveAspectRatio="xMidYMax meet" className="house-sun-layer" aria-hidden="true"><SceneSun p={time} /></svg>
      {!reduced && (
        <div className="absolute bottom-3 right-6 flex gap-1">
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground" aria-label={playing ? "Pause construction" : "Play construction"} title={playing ? "Pause construction" : "Play construction"} onClick={() => time >= DURATION ? replay() : setPlaying((value) => !value)}>
            {playing ? <Pause /> : <Play />}
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground" aria-label="Replay construction" title="Replay construction" onClick={replay}><RotateCcw /></Button>
        </div>
      )}
    </div>
  );
}