import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { PartnerButton } from "@/components/partner-button";
import { useT } from "next-i18next/client";

export function Hero() {
  const { t } = useT();

  return (
    <section className="relative min-h-[80vh] flex items-center bg-pattern overflow-hidden px-margin-mobile md:px-margin-desktop">
      <div className="absolute inset-0 bg-gradient-to-br from-surface-container-lowest/80 to-surface-container-low/50 z-0" />

      <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter w-full">
        <div className="md:col-span-8 flex flex-col justify-center">
          <span className="font-label-caps text-label-caps text-faint uppercase tracking-widest mb-6 block">
            {t("hero.minititle")}
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 border-l-4 border-primary pl-6 py-2">
          {t("hero.caption")}
          </p>
          <div className="flex flex-wrap gap-4">
            <PartnerButton className="px-8 py-4 ambient-shadow" />
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-[2px] border-on-secondary-fixed bg-transparent px-8 py-4 text-button font-button text-on-secondary-fixed hover:bg-surface-container-highest"
            >
              <Link href="/problem-statements">{t("hero.viewchallenges")}</Link>
            </Button>
          </div>
        </div>

        <div className="hidden md:flex md:col-span-4 items-center justify-center">
          <Logo className="w-64 h-64" />
        </div>
      </div>
      <div className="absolute -right-64 -top-64 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl z-0 pointer-events-none" />
    </section>
  );
}
