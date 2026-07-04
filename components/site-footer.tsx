import Link from "next/link"
import { CrescentMoon } from "@/components/celestial"

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Ethical Rules", href: "#" },
  { label: "GDPR", href: "#" },
  { label: "Cookie Policy", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-24 border-t border-border/50">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <div className="flex justify-center text-primary/70">
          <CrescentMoon className="size-8" />
        </div>
        <p className="mt-6 font-serif text-3xl font-light tracking-[0.3em] text-primary">
          CELESTIA
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
          Celestia is intended for entertainment and self-reflection purposes only. Our horoscopes,
          readings, and guidance are not a substitute for professional medical, legal, financial, or
          psychological advice. By using this site you acknowledge that astrological interpretations
          are for personal insight, and any decisions made in response remain your own responsibility.
        </p>

        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          aria-label="Footer"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] text-foreground/60 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-10 text-xs tracking-wider text-muted-foreground/60">
          © {new Date().getFullYear()} Celestia. Written in the stars.
        </p>
      </div>
    </footer>
  )
}
