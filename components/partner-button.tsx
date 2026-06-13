import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * The brand "Partner with us" CTA → /partner.
 * Shared across the navbar, the mobile sticky bar, and the hero.
 * Pass `className` for placement-specific sizing/visibility.
 */
export function PartnerButton({
  className,
  children = "Partner with us",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Button
      asChild
      className={cn(
        "h-auto rounded-xl bg-primary-container text-button font-button text-on-primary hover:bg-primary",
        className,
      )}
    >
      <Link href="/partner">{children}</Link>
    </Button>
  );
}
