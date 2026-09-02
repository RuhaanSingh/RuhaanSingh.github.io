import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right" | "none";

const getInitial = (direction: Direction) => {
  switch (direction) {
    case "up":
      return { opacity: 0, y: 40 };
    case "down":
      return { opacity: 0, y: -40 };
    case "left":
      return { opacity: 0, x: -50 };
    case "right":
      return { opacity: 0, x: 50 };
    default:
      return { opacity: 0 };
  }
};

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.2,
}: RevealProps) => {
  const variants: Variants = {
    hidden: getInitial(direction),
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: easeOut },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
