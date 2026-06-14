"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useT } from "next-i18next/client";

export function PartnerButton({ className }: { className?: string; }) {
  const { t } = useT();
  return (
    <Button
      asChild
      className={cn(
        "h-auto rounded-xl bg-primary-container text-button font-button text-on-primary hover:bg-primary",
        className,
      )}
    >
      <Link href="/partner">{t("partner")}</Link>
    </Button>
  );
}
