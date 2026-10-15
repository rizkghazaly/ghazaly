import { useCallback, useEffect, useRef, useState } from "react";
import { DURATION } from "./phases";

export function useConstructionTimeline() {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const timeRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) {
      timeRef.current = DURATION;
      setTime(DURATION);
    } else setPlaying(true);
    const onPreference = () => {
      if (preference.matches) setPlaying(false);
    };
    preference.addEventListener("change", onPreference);
    const node = containerRef.current;
    const observer = new IntersectionObserver(([entry]) => setVisible(Boolean(entry?.isIntersecting)), { threshold: 0.1 });
    if (node) observer.observe(node);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", onPreference);
    };
  }, []);

  useEffect(() => {
    if (!playing || !visible) return;
    let previous = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const dt = Math.min((now - previous) / 1000, 0.05);
      previous = now;
      timeRef.current = Math.min(DURATION, timeRef.current + dt);
      setTime(timeRef.current);
      if (timeRef.current >= DURATION) setPlaying(false);
      else frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, visible]);

  const seek = useCallback((value: number) => {
    timeRef.current = Math.min(DURATION, Math.max(0, value));
    setTime(timeRef.current);
    if (timeRef.current >= DURATION) setPlaying(false);
  }, []);
  const replay = useCallback(() => {
    timeRef.current = 0;
    setTime(0);
    setPlaying(true);
  }, []);
  const toggle = () => {
    if (timeRef.current >= DURATION) replay();
    else setPlaying((value) => !value);
  };
  return { time, playing, seek, replay, toggle, containerRef };
}