"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"
import { Logo } from "@/components/logo"
import { PartnerButton } from "@/components/partner-button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useT } from "next-i18next/client"

function isActive(pathname: string, href: string) {
  if (href === "#") return false
  if (href === "/") return pathname === "/"
  return pathname.startsWith(href)
}

export function Navbar() {
  const { t } = useT();
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    { label: t("home"), href: "/" },
    { label: t("timeline"), href: "/timeline" },
    { label: t("problem_statements"), href: "/problem-statements" },
    { label: t("partners"), href: "/partners" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/about#contact" },
  ]

  return (
    <nav className="bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 fixed top-0 w-full z-50 shadow-sm transition-transform duration-300">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="h-9 w-9" />
          <span className="font-display-lg text-headline-sm font-extrabold tracking-tighter text-primary">
            Japan Day Hack
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                isActive(pathname, link.href)
                  ? "text-primary border-b-2 border-primary font-bold pb-1 transition-colors duration-300"
                  : "text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <LanguageSwitcher />
        <PartnerButton className="hidden md:inline-flex px-6 py-3 active:scale-95" />

        <button
          className="md:hidden text-on-surface"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon />
          <span className="sr-only">{t("menu")}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-outline-variant/30 bg-surface/95 backdrop-blur-md px-margin-mobile py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={
                isActive(pathname, link.href)
                  ? "text-primary font-bold"
                  : "text-on-surface-variant font-medium hover:text-primary"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
