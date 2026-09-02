import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}

const TiltCard = ({ children, className, max = 6, glare = true }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 250, damping: 22 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 250, damping: 22 });

  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glareBg = useTransform([glareX, glareY], ([x, y]) =>
    `radial-gradient(260px circle at ${x} ${y}, hsl(var(--primary) / 0.18), transparent 70%)`
  );

  if (prefersReducedMotion) {
    return <div className={cn("relative", className)}>{children}</div>;
  }

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        px.set(0.5);
        py.set(0.5);
      }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={cn("relative will-change-transform [transform-style:preserve-3d]", className)}
    >
      {glare && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
          style={{ background: glareBg, opacity: hovering ? 1 : 0, transition: "opacity 0.3s ease" }}
        />
      )}
      {children}
    </motion.div>
  );
};

export default TiltCard;
