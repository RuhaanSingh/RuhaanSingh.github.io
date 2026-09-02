import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let glowX = targetX;
    let glowY = targetY;
    let hovering = false;

    const applyDot = () => {
      if (!dotRef.current) return;
      const scale = hovering ? 2.4 : 1;
      dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%) scale(${scale})`;
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      applyDot();
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      hovering = !!target.closest("a, button, [data-cursor-hover]");
      applyDot();
    };

    const tick = () => {
      glowX += (targetX - glowX) * 0.12;
      glowY += (targetY - glowY) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [prefersReducedMotion]);

  if (!enabled || prefersReducedMotion) return null;

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[420px] w-[420px] rounded-full opacity-[0.18] mix-blend-screen will-change-transform"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary-glow)) 0%, transparent 70%)",
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary-glow)/0.8)] will-change-transform"
      />
    </>
  );
};

export default CursorGlow;
