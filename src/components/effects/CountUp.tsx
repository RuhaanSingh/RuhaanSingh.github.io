import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

interface CountUpProps {
  value: number;
  suffix?: string;
  className?: string;
}

const CountUp = ({ value, suffix = "", className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (isInView) motionVal.set(value);
  }, [isInView, value, motionVal]);

  useEffect(() => {
    if (prefersReducedMotion) {
      if (ref.current) ref.current.textContent = `${value}${suffix}`;
      return;
    }
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
    });
  }, [spring, suffix, prefersReducedMotion, value]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
};

export default CountUp;
