"use client";

import { motion } from "motion/react";
import {
  ArrowRightIcon,
  Code2Icon,
  MailIcon,
  MapPinIcon,
  MegaphoneIcon,
  PhoneIcon,
  UsersIcon,
  UserRoundIcon,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { useT } from "next-i18next/client";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function AboutPage() {
  const { t } = useT();
  const teamIcons = [
    UsersIcon,
    Code2Icon,
    MegaphoneIcon,
  ]
  const team: { title: string; subtitle: string }[] = [
  ];
  for (let i = 1; i <= 3; i++) {
    team.push({
      title: t(`team.item${i}.title`),
      subtitle: t(`team.item${i}.subtitle`),
    })
  }

  const contactItemsIcons = [
    MapPinIcon,
    MailIcon,
    PhoneIcon,
  ]
  const contactItems: {
    title: string;
    body: React.ReactNode;
  }[] = [
    {
      title: t("location"),
      body: (
        <>
          Thapar Institute of Engineering and Technology
          <br />
          Bhadson Road, Patiala, Punjab 147004
        </>
      ),
    },
    {
      title: t("footer.connectlinks.item2"),
      body: (
        <a
          href="mailto:japandayhack@thapar.edu"
          className="text-on-surface-variant hover:text-primary transition-colors"
        >
          japandayhack@thapar.edu
        </a>
      ),
    },
    {
      title: t("footer.connectlinks.item3"),
      body: "+91 175 239 3021 (General Inquiry)",
    },
  ];
  return (
    <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto space-y-section-gap">
      <motion.section
        {...reveal}
        className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[50vh]"
      >
        <div className="col-span-1 md:col-span-8 space-y-6">
          <span className="font-label-caps text-label-caps text-faint uppercase tracking-widest">
            {t("about.institute")}
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            {t("about.bridingtradition")} <br />
            <span className="text-primary">{t("about.andinnovation")}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            {t("about.description")}
          </p>
        </div>
        <div className="col-span-1 md:col-span-4 h-full min-h-[300px] rounded-lg relative overflow-hidden flex items-center justify-center">
          <Logo className="w-2/3 h-2/3" />
        </div>
      </motion.section>

      <motion.section {...reveal} className="space-y-12">
        <div className="space-y-2">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            {t("about.team.title")}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="col-span-1 md:col-span-7 bg-surface-container-lowest rounded-sm border border-outline-variant/50 ambient-shadow card-hover p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 shrink-0 rounded-full bg-surface-container-low overflow-hidden border-2 border-primary-container flex items-center justify-center">
              <UserRoundIcon className="size-16 text-outline-variant" />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {t("about.team.name")}
                </h3>
                <p className="font-label-caps text-label-caps text-primary uppercase">
                  {t("about.team.dean")}
                </p>
              </div>
              <p className="text-on-surface-variant">
                {t("about.team.description")}
              </p>
              <button className="font-button text-button text-on-surface flex items-center gap-2 hover:text-primary transition-colors">
                <span>{t("about.readfullbio")}</span>
                <ArrowRightIcon className="size-[18px]" />
              </button>
            </div>
          </div>

          <div className="col-span-1 md:col-span-5 space-y-gutter">
            {team.map((member, i) => {
              const Icon = teamIcons[i];
              return (
                <div
                  key={member.title}
                  className="bg-surface-container-lowest rounded-sm border border-outline-variant/50 p-6 flex items-center gap-4 hover:bg-surface-container-low transition-colors cursor-default"
                >
                  <Icon className="size-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-headline-sm text-lg font-semibold text-on-surface">
                      {member.title}
                    </h4>
                    <p className="text-sm text-faint">{member.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section {...reveal} id="contact" className="scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-margin-desktop bg-surface-container-lowest border border-outline-variant/50 rounded-sm ambient-shadow overflow-hidden">
          <div className="p-8 md:p-12 space-y-8">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
                {t("about.getintouch")} 
              </h2>
              <p className="text-on-surface-variant">
                {t("about.getintouch.caption")}
              </p>
            </div>
            <div className="space-y-6">
              {contactItems.map((item, i) => {
                const Icon = contactItemsIcons[i];
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-button text-button text-on-surface mb-1">
                        {item.title}
                      </h4>
                      <p className="text-on-surface-variant">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[400px] bg-surface-container-low border-l border-outline-variant/30 flex items-center justify-center">
            <div className="absolute inset-0 opacity-40 swiss-grid-bg" />
            <div
              className="relative z-10 flex flex-col items-center animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <MapPinIcon
                className="size-12 text-primary drop-shadow-md"
                fill="currentColor"
              />
              <div className="bg-surface-container-lowest px-4 py-2 rounded-sm border border-outline-variant shadow-md mt-2">
                <span className="font-button text-button text-on-surface">
                {t("about.thapar")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
