"use client";

import { motion } from "motion/react";
import {
  BriefcaseIcon,
  ChevronDownIcon,
  GavelIcon,
  LightbulbIcon,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Logo } from "@/components/logo";
import { useT } from "next-i18next/client";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

export default function PartnerPage() {
  const { t } = useT();
  const benefitsIcon = [
    LightbulbIcon,
    GavelIcon,
    BriefcaseIcon,
  ]
  const benefits: { title: string; description: string }[] = [];
  for (let i = 1; i <= 3; i++) {
    benefits.push({
      title: t(`partner.item${i}.title`),
      description: t(`partner.item${i}.description`),
    });
  }

  const interests = [];
  for (let i = 1; i <= 4; i++) {
    interests.push(t(`partner.interests.item${i}`));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success(t("partner.requestsent"), {
      description: t("partner.requestsent.description"),
      descriptionClassName: "!text-red-400",
    });
    e.currentTarget.reset();
  }

  return (
    <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-section-gap grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6">
            {t("partner.empowerthenext")} <br />
            <span className="text-primary">{t("partner.generation")}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-faint mb-8 max-w-lg">
            {t("partner.description")}
          </p>

          <div className="space-y-6">
            {benefits.map((benefit, i) => {
              const Icon = benefitsIcon[i];
              return (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="bg-surface-container-low p-3 rounded-full text-primary">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                      {benefit.title}
                    </h3>
                    <p className="font-body-md text-body-md text-faint">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden relative ambient-shadow flex items-center justify-center">
            <Logo className="w-2/3 h-2/3" />
            <div className="absolute inset-0 bg-gradient-to-tr from-surface/80 to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="glass-panel rounded-xl p-8 md:p-12 ambient-shadow max-w-4xl mx-auto">
          <div className="mb-10 text-center md:text-left border-b border-surface-variant pb-6">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
              {t("partner.request")}
            </h2>
            <p className="font-body-md text-body-md text-faint">
              {t("partner.request.description")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Label
                  htmlFor="companyName"
                  className="font-label-caps text-label-caps text-faint uppercase mb-2"
                >
                  {t("partner.form.companyName")}
                </Label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  className="w-full form-input-minimal font-body-lg text-body-lg text-on-surface pb-2"
                />
              </div>
              <div>
                <Label
                  htmlFor="contactPerson"
                  className="font-label-caps text-label-caps text-faint uppercase mb-2"
                >
                  {t("partner.form.contactPerson")}
                </Label>
                <input
                  id="contactPerson"
                  name="contactPerson"
                  type="text"
                  required
                  className="w-full form-input-minimal font-body-lg text-body-lg text-on-surface pb-2"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="font-label-caps text-label-caps text-faint uppercase mb-2"
                >
                  {t("partner.form.coopemail")}
                </Label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full form-input-minimal font-body-lg text-body-lg text-on-surface pb-2"
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="font-label-caps text-label-caps text-faint uppercase mb-2"
                >
                  {t("partner.form.phone")}
                </Label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full form-input-minimal font-body-lg text-body-lg text-on-surface pb-2"
                />
              </div>
            </div>

            <div className="pt-4">
              <Label className="font-label-caps text-label-caps text-faint uppercase mb-4">
                {t("partner.aeo")}
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {interests.map((interest) => {
                  const id = `interest-${interest}`;
                  return (
                    <Label
                      key={interest}
                      htmlFor={id}
                      className="flex items-center gap-3 cursor-pointer group font-body-md text-body-md text-on-surface hover:text-primary transition-colors"
                    >
                      <Checkbox id={id} name="interests" value={interest} />
                      {interest}
                    </Label>
                  );
                })}
              </div>
            </div>

            <div className="pt-4">
              <Label
                htmlFor="internships"
                className="font-label-caps text-label-caps text-faint uppercase mb-2"
              >
                {t("partner.iso")}
              </Label>
              <div className="relative">
                <select
                  id="internships"
                  name="internships"
                  className="w-full form-input-minimal font-body-lg text-body-lg text-on-surface pb-2 bg-transparent appearance-none cursor-pointer pr-8"
                  defaultValue="0"
                >
                  <option value="0">{t("partner.iso.item1")}</option>
                  <option value="1-3">{t("partner.iso.item2")}</option>
                  <option value="4-10">{t("partner.iso.item3")}</option>
                  <option value="10+">{t("partner.iso.item4")}</option>
                </select>
                <ChevronDownIcon className="size-4 text-faint absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="pt-4">
              <Label
                htmlFor="message"
                className="font-label-caps text-label-caps text-faint uppercase mb-2"
              >
                {t("partner.message")}
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border border-outline-variant rounded-[2px] bg-surface-container-lowest p-4 font-body-md text-body-md text-on-surface focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary resize-none transition-colors"
              />
            </div>

            <div className="pt-8 flex justify-end">
              <Button
                type="submit"
                className="h-auto rounded-[2px] bg-primary-container px-8 py-4 text-button font-button text-on-primary hover:bg-primary w-full md:w-auto shadow-sm hover:shadow-md"
              >
                {t("partner.submit")}
              </Button>
            </div>
          </form>
        </div>
      </motion.section>
    </main>
  );
}
