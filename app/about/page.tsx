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
import type { LucideIcon } from "lucide-react";
import { Logo } from "@/components/logo";

const team: { icon: LucideIcon; title: string; subtitle: string }[] = [
  {
    icon: UsersIcon,
    title: "Core Committee",
    subtitle: "Strategic Planning & Execution",
  },
  {
    icon: Code2Icon,
    title: "Technical Leads",
    subtitle: "Infrastructure & Support",
  },
  {
    icon: MegaphoneIcon,
    title: "Outreach",
    subtitle: "Sponsorships & PR",
  },
];

const contactItems: {
  icon: LucideIcon;
  title: string;
  body: React.ReactNode;
}[] = [
  {
    icon: MapPinIcon,
    title: "Location",
    body: (
      <>
        Thapar Institute of Engineering and Technology
        <br />
        Bhadson Road, Patiala, Punjab 147004
      </>
    ),
  },
  {
    icon: MailIcon,
    title: "Email",
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
    icon: PhoneIcon,
    title: "Phone",
    body: "+91 175 239 3021 (General Inquiry)",
  },
];

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto space-y-section-gap">
      {/* Hero / Intro */}
      <motion.section
        {...reveal}
        className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[50vh]"
      >
        <div className="col-span-1 md:col-span-8 space-y-6">
          <span className="font-label-caps text-label-caps text-faint uppercase tracking-widest">
            The Institution
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            Bridging Tradition <br />
            <span className="text-primary">and Innovation</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Japan Day Hack is proudly hosted by the Thapar School of Liberal
            Arts and Sciences (TSLAS) in collaboration with Thapar Institute. We
            bring together diverse minds to solve real-world challenges,
            blending traditional Japanese precision with forward-thinking
            technological solutions.
          </p>
        </div>
        <div className="col-span-1 md:col-span-4 h-full min-h-[300px] bg-surface-container-low rounded-lg border border-outline-variant/30 relative overflow-hidden flex items-center justify-center">
          <Logo className="w-2/3 h-2/3" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
      </motion.section>

      {/* Leadership & Team */}
      <motion.section {...reveal} className="space-y-12">
        <div className="space-y-2">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Leadership &amp; Team
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Dean profile */}
          <div className="col-span-1 md:col-span-7 bg-surface-container-lowest rounded-sm border border-outline-variant/50 ambient-shadow card-hover p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 shrink-0 rounded-full bg-surface-container-low overflow-hidden border-2 border-primary-container flex items-center justify-center">
              <UserRoundIcon className="size-16 text-outline-variant" />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Dr. Name Here
                </h3>
                <p className="font-label-caps text-label-caps text-primary uppercase">
                  Dean, TSLAS
                </p>
              </div>
              <p className="text-on-surface-variant">
                Guiding the vision of TSLAS to integrate liberal arts with deep
                technological inquiry. The Dean champions the Japan Day Hack as a
                platform for interdisciplinary excellence, encouraging students
                to approach complex global problems with a holistic, disciplined
                mindset.
              </p>
              <button className="font-button text-button text-on-surface flex items-center gap-2 hover:text-primary transition-colors">
                <span>Read Full Bio</span>
                <ArrowRightIcon className="size-[18px]" />
              </button>
            </div>
          </div>

          {/* Organizing team */}
          <div className="col-span-1 md:col-span-5 space-y-gutter">
            {team.map((member) => {
              const Icon = member.icon;
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

      {/* Contact & Map */}
      <motion.section {...reveal} id="contact" className="scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-margin-desktop bg-surface-container-lowest border border-outline-variant/50 rounded-sm ambient-shadow overflow-hidden">
          {/* Contact info */}
          <div className="p-8 md:p-12 space-y-8">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
                Get in Touch
              </h2>
              <p className="text-on-surface-variant">
                For inquiries regarding participation, sponsorship, or general
                information.
              </p>
            </div>
            <div className="space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
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

          {/* Map placeholder */}
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
                  Thapar Institute
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
