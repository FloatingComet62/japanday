'use client'

import { motion } from 'motion/react'
import {
  ArrowRightIcon,
  Building2Icon,
  HandshakeIcon,
  LandmarkIcon,
} from 'lucide-react'
import { useT } from 'next-i18next/client'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
}

export default function ParntersPage() {
  const { t } = useT();
  return (
    <main className="flex-grow pt-32 pb-section-gap relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary-container/5 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.header
          {...fadeUp}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 md:mb-32 max-w-3xl"
        >
          <div className="inline-block mb-6 px-3 py-1 bg-surface-container-highest border border-outline-variant/50 rounded-sm font-label-caps text-label-caps text-faint tracking-widest uppercase">
            {t("partners.titletag")}
          </div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 border-l-4 border-primary pl-6">
            {t("partners.title")}
          </h1>
          <p className="font-body-lg text-body-lg text-faint pl-7 max-w-xl">
            {t("partners.description")}
          </p>
        </motion.header>

        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter swiss-grid-bg p-8 rounded-lg border border-outline-variant/20 bg-surface-container-lowest/50 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <div className="aspect-square bg-surface-container-lowest border border-outline-variant/30 rounded flex flex-col items-center justify-center relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-surface-variant/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Building2Icon className="size-12 text-outline-variant mb-4 group-hover:text-primary-container transition-colors duration-500" />
              <p className="font-label-caps text-label-caps text-faint tracking-widest uppercase">
                {t("partners.spacereserved")}
              </p>
              <div className="absolute bottom-4 left-4 right-4 h-1 bg-surface-container-highest overflow-hidden rounded-full">
                <div className="h-full bg-primary/20 w-1/3 animate-[pulse_3s_ease-in-out_infinite]" />
              </div>
            </div>

            <div className="aspect-square bg-surface-container-lowest border border-outline-variant/30 rounded flex flex-col items-center justify-center relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-surface-variant/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <LandmarkIcon className="size-12 text-outline-variant mb-4 group-hover:text-primary-container transition-colors duration-500" />
              <p className="font-label-caps text-label-caps text-faint tracking-widest uppercase">
                {t("partners.spacereserved")}
              </p>
            </div>

            <div className="aspect-square lg:col-span-2 bg-surface-container-lowest border border-outline-variant/30 rounded flex flex-col items-center justify-center relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-surface-variant/10 to-transparent" />
              <div className="text-center z-10 px-8">
                <HandshakeIcon className="size-14 text-primary/40 mb-6 mx-auto" />
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                  {t("partners.claim")}
                </h3>
                <p className="font-body-md text-body-md text-faint mb-6">
                  {t("partners.claimdescription")}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-surface border border-outline-variant text-on-surface font-button text-button py-2 px-4 rounded hover:bg-surface-variant transition-colors"
                >
                  {t("partners.desk")}
                  <ArrowRightIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
