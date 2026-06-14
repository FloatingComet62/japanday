"use client";

import { motion } from "motion/react";
import { LightbulbIcon } from "lucide-react";
import { useT } from "next-i18next/client";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function ProblemStatementsPage() {
  const { t } = useT();

  return (
    <main className="flex-grow pt-[120px] pb-section-gap flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at top right, var(--color-primary-fixed), transparent 40%)",
        }}
      />

      <div className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 relative w-32 h-32 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-primary-fixed rounded-full opacity-30 animate-pulse" />
            <div className="absolute inset-4 bg-primary-container rounded-full opacity-10" />
            <LightbulbIcon className="size-16 text-primary" />
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6"
          >
            {t("ps.title")}
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-lg text-body-lg text-faint max-w-2xl leading-relaxed mb-12"
          >
            {t("ps.description")}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full border border-surface-variant">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                {t("ps.todo")}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
