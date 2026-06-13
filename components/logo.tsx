import { cn } from "@/lib/utils";

/**
 * Japan Day Hack logo — "Fuji Sunrise" mark.
 * Rising sun + Mount Fuji + a data-pulse line, in the brand palette.
 * Use everywhere a logo is needed so the mark stays consistent across pages.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Japan Day Hack logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rising sun */}
      <circle cx="50" cy="22" r="13" fill="#BC002D" />
      {/* Mount Fuji */}
      <path d="M6 64 L32 24 Q38 16 44 24 L70 64 Z" fill="#1A1C1C" />
      {/* Snow cap */}
      <path d="M29 32 l3 -5 q6 -8 12 0 l3 5 q-9 6 -18 0 Z" fill="#FFFFFF" />
      {/* Data pulse */}
      <polyline
        points="6,65 26,65 32,58 40,72 46,64 70,64"
        fill="none"
        stroke="#C9A14A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
