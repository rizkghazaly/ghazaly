import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BuildScene } from "./BuildScene";
import { DURATION } from "./phases";

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
      clock.current = Math.min(DURATION, clock.current + Math.min((now - previous) / 1000, 0.1) * 1.5);
      previous = now;
      setTime(clock.current);
      if (clock.current >= DURATION) setPlaying(false);
      else frame = requestAnimationFrame(advance);
    };
    frame = requestAnimationFrame(advance);
    return () => cancelAnimationFrame(frame);
  }, [playing, visible, reduced]);

  const replay = () => {
    clock.current = 3;
    setTime(3);
    setPlaying(true);
  };

  return (
    <div ref={element} className="house-animation">
      <svg viewBox="0 50 1100 680" preserveAspectRatio="xMidYMax meet" className="h-full w-full" style={{ WebkitMaskImage: "radial-gradient(ellipse 85% 95% at 60% 70%, #000 55%, transparent 100%)", maskImage: "radial-gradient(ellipse 85% 95% at 60% 70%, #000 55%, transparent 100%)" }} role="img" aria-label="House construction with Rizk Ghazaly’s name assembled above the rooftop">
        <defs><linearGradient id="houseSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f3e3cf" stopOpacity={0.55} /><stop offset="1" stopColor="#f6e6d2" stopOpacity={0.85} /></linearGradient></defs>
        <rect x={-200} y={0} width={1500} height={620} fill="url(#houseSky)" />
        <BuildScene p={time} />
      </svg>
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