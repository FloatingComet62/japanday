"use client"

import { Logo } from '@/components/logo'
import { useT } from 'next-i18next/client';


function FooterLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="font-body-md text-body-md text-faint hover:text-primary underline underline-offset-4 transition-all opacity-80 hover:opacity-100"
    >
      {label}
    </a>
  )
}

export function Footer() {
  const { t } = useT();

  console.log(t("footer.partnerlink"))
  const partnerLinks = [
    t("footer.partnerlinks.item1"),
    t("footer.partnerlinks.item2"),
    t("footer.partnerlinks.item3"),
  ]
  const connectLinks = [
    t("footer.connectlinks.item1"),
    t("footer.connectlinks.item2"),
    t("footer.connectlinks.item3"),
  ]

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/50 w-full py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <Logo className="h-8 w-8" />
            <span className="font-display-lg text-headline-sm font-bold text-on-surface">
              {t("title")}
            </span>
          </div>
          <p className="font-body-md text-body-md text-faint max-w-sm">
            {t("footer.copyright")}
          </p>
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="font-label-caps text-label-caps text-on-surface uppercase mb-2">
            {t("partners")}
          </h4>
          {partnerLinks.map((label) => (
            <FooterLink key={label} label={label} />
          ))}
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="font-label-caps text-label-caps text-on-surface uppercase">
            {t("connect")}
          </h4>
          {connectLinks.map((label) => (
            <FooterLink key={label} label={label} />
          ))}
        </div>
      </div>
    </footer>
  )
}
