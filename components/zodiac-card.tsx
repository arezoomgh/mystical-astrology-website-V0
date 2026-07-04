import Link from "next/link"
import type { ZodiacSign } from "@/lib/zodiac"

export function ZodiacCard({ sign }: { sign: ZodiacSign }) {
  return (
    <Link
      href={`/zodiac/${sign.slug}`}
      className="group relative flex flex-col items-center rounded-xl border border-border/70 bg-card/60 px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:bg-card hover:shadow-[0_0_30px_-8px_var(--gold)]"
    >
      <span
        aria-hidden="true"
        className="astro-glyph flex size-16 items-center justify-center rounded-full border border-primary/30 text-4xl text-primary transition-all duration-300 group-hover:border-primary/70 group-hover:shadow-[0_0_20px_-4px_var(--gold)]"
      >
        {`${sign.symbol}\uFE0E`}
      </span>
      <h3 className="mt-5 font-serif text-2xl tracking-wide text-primary">{sign.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{sign.dates}</p>
    </Link>
  )
}
