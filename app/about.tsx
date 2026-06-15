"use client";

import { motion } from "motion/react";
import { BriefcaseIcon, HardHatIcon, UsersIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useT } from "next-i18next/client";

type Pillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

export function About() {
  const { t } = useT();
  const pillars: Pillar[] = [
    {
      icon: BriefcaseIcon,
      title: t("about.pillar1.title"),
      description: t("about.pillar1.description"),
    },
    {
      icon: HardHatIcon,
      title: t("about.pillar2.title"),
      description: t("about.pillar2.description"),
    },
    {
      icon: UsersIcon,
      title: t("about.pillar3.title"),
      description: t("about.pillar3.description"),
    },
  ];
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          {...reveal}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:w-1/2"
        >
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
            {t("about.strategicvalue")}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {t("about.strategicdescription")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                {...reveal}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group bg-surface-container-lowest p-10 rounded-lg border border-outline-variant/30 ambient-shadow card-hover"
              >
                <div className="w-14 h-14 bg-surface-container-low rounded-full flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-body-md text-faint">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
