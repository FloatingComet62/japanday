"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

type Stat = {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { target: 500, label: "Participants" },
  { target: 48, suffix: "h", label: "Hours" },
  { target: 20, suffix: "+", label: "Industry Problems" },
  { target: 2024, prefix: "Mar ", label: "Event Date" },
];

function Counter({ target, prefix = "", suffix = "" }: Stat) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.ceil(progress * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 bg-surface-container-low px-margin-mobile md:px-margin-desktop border-y border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-gutter text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-surface-container-lowest p-8 rounded-lg ambient-shadow border border-outline-variant/20"
            >
              <div className="font-display-lg text-headline-md md:text-display-lg text-primary mb-2">
                <Counter {...stat} />
              </div>
              <div className="font-label-caps text-label-caps text-faint uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
