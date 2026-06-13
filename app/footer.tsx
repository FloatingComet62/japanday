import { Logo } from '@/components/logo'

const partnerLinks = ['TSLAS', 'Thapar Institute', 'Privacy Policy']
const connectLinks = ['Contact Dean', 'Email', 'Phone']

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
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/50 w-full py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <Logo className="h-8 w-8" />
            <span className="font-display-lg text-headline-sm font-bold text-on-surface">
              Japan Day Hack
            </span>
          </div>
          <p className="font-body-md text-body-md text-faint max-w-sm">
            © 2026 Japan Day Hack. All rights reserved. In partnership with
            TSLAS and Thapar Institute.
          </p>
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="font-label-caps text-label-caps text-on-surface uppercase mb-2">
            Partners
          </h4>
          {partnerLinks.map((label) => (
            <FooterLink key={label} label={label} />
          ))}
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="font-label-caps text-label-caps text-on-surface uppercase">
            Connect
          </h4>
          {connectLinks.map((label) => (
            <FooterLink key={label} label={label} />
          ))}
        </div>
      </div>
    </footer>
  )
}
