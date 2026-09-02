import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";

interface BlobConfig {
  className: string;
  scrollSpeed: number;
  mouseStrength: number;
}

const blobs: BlobConfig[] = [
  {
    className: "absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[120px]",
    scrollSpeed: 0.15,
    mouseStrength: 24,
  },
  {
    className: "absolute top-[35%] -right-40 h-[620px] w-[620px] rounded-full bg-accent/15 blur-[140px]",
    scrollSpeed: -0.12,
    mouseStrength: -18,
  },
  {
    className: "absolute bottom-0 left-1/4 h-[440px] w-[440px] rounded-full bg-glow/10 blur-[110px]",
    scrollSpeed: 0.08,
    mouseStrength: 12,
  },
];

const Blob = ({
  config,
  mx,
  my,
  scrollY,
}: {
  config: BlobConfig;
  mx: MotionValue<number>;
  my: MotionValue<number>;
  scrollY: MotionValue<number>;
}) => {
  const smoothMx = useSpring(mx, { stiffness: 40, damping: 20 });
  const smoothMy = useSpring(my, { stiffness: 40, damping: 20 });

  const y = useTransform([scrollY, smoothMy], ([s, m]: number[]) => s * config.scrollSpeed + m * config.mouseStrength);
  const x = useTransform(smoothMx, (m) => m * config.mouseStrength);

  return <motion.div className={config.className} style={{ x, y }} />;
};

const ParallaxBlobs = () => {
  const prefersReducedMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2);
      my.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {blobs.map((b, i) => (
          <div key={i} className={b.className} />
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <Blob key={i} config={b} mx={mx} my={my} scrollY={scrollY} />
      ))}
    </div>
  );
};

export default ParallaxBlobs;
