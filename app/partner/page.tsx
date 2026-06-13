"use client";

import { motion } from "motion/react";
import {
  BriefcaseIcon,
  ChevronDownIcon,
  GavelIcon,
  LightbulbIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Logo } from "@/components/logo";

const benefits: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: LightbulbIcon,
    title: "Submit Problems",
    description:
      "Present your industry challenges directly to ambitious student teams.",
  },
  {
    icon: GavelIcon,
    title: "Judge Solutions",
    description: "Evaluate innovative approaches and provide expert feedback.",
  },
  {
    icon: BriefcaseIcon,
    title: "Offer Internships",
    description:
      "Identify and recruit outstanding participants for your organization.",
  },
];

const interests = [
  "Technology & AI",
  "Sustainability",
  "Finance/Fintech",
  "Robotics/Mfg.",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

export default function PartnerPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Partnership request submitted", {
      description:
        "Our corporate relations team will contact you shortly.",
      descriptionClassName: "!text-red-400",
    });
    e.currentTarget.reset();
  }

  return (
    <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
      {/* Hero explainer */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-section-gap grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6">
            Empower the Next <br />
            <span className="text-primary">Generation.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-faint mb-8 max-w-lg">
            Join forces with the brightest young minds at Japan Day Hack. We
            invite industry leaders to collaborate, mentor, and discover
            top-tier talent ready to solve real-world challenges.
          </p>

          <div className="space-y-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
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

        {/* Branded visual */}
        <div className="relative hidden md:block">
          <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden relative ambient-shadow flex items-center justify-center">
            <Logo className="w-2/3 h-2/3" />
            <div className="absolute inset-0 bg-gradient-to-tr from-surface/80 to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.section>

      {/* Partnership form */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="glass-panel rounded-xl p-8 md:p-12 ambient-shadow max-w-4xl mx-auto">
          <div className="mb-10 text-center md:text-left border-b border-surface-variant pb-6">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">
              Partnership Request
            </h2>
            <p className="font-body-md text-body-md text-faint">
              Fill out the form below and our corporate relations team will
              contact you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Label
                  htmlFor="companyName"
                  className="font-label-caps text-label-caps text-faint uppercase mb-2"
                >
                  Company Name
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
                  Contact Person &amp; Designation
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
                  Corporate Email
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
                  Phone Number
                </Label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full form-input-minimal font-body-lg text-body-lg text-on-surface pb-2"
                />
              </div>
            </div>

            {/* Areas of interest */}
            <div className="pt-4">
              <Label className="font-label-caps text-label-caps text-faint uppercase mb-4">
                Areas of Interest for Problem Statements
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

            {/* Internship slots */}
            <div className="pt-4">
              <Label
                htmlFor="internships"
                className="font-label-caps text-label-caps text-faint uppercase mb-2"
              >
                Internship Slots Offered (Optional)
              </Label>
              <div className="relative">
                <select
                  id="internships"
                  name="internships"
                  className="w-full form-input-minimal font-body-lg text-body-lg text-on-surface pb-2 bg-transparent appearance-none cursor-pointer pr-8"
                  defaultValue="0"
                >
                  <option value="0">None currently</option>
                  <option value="1-3">1 - 3 Slots</option>
                  <option value="4-10">4 - 10 Slots</option>
                  <option value="10+">10+ Slots</option>
                </select>
                <ChevronDownIcon className="size-4 text-faint absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Message */}
            <div className="pt-4">
              <Label
                htmlFor="message"
                className="font-label-caps text-label-caps text-faint uppercase mb-2"
              >
                Message / Specific Requirements
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border border-outline-variant rounded-[2px] bg-surface-container-lowest p-4 font-body-md text-body-md text-on-surface focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary resize-none transition-colors"
              />
            </div>

            {/* Submit */}
            <div className="pt-8 flex justify-end">
              <Button
                type="submit"
                className="h-auto rounded-[2px] bg-primary-container px-8 py-4 text-button font-button text-on-primary hover:bg-primary w-full md:w-auto shadow-sm hover:shadow-md"
              >
                Submit Partnership Request
              </Button>
            </div>
          </form>
        </div>
      </motion.section>
    </main>
  );
}
