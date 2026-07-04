import Link from "next/link"
import { Sunburst, CrescentMoon, Constellation } from "@/components/celestial"

export function Hero() {
  return (
    <section className="relative z-10 overflow-hidden">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-16 pt-14 text-center lg:pt-20">
        {/* Side decorations */}
        <Sunburst className="pointer-events-none absolute left-4 top-10 hidden size-28 text-primary/25 lg:block xl:size-40" />
        <CrescentMoon className="pointer-events-none absolute right-6 top-24 hidden size-24 text-primary/25 lg:block xl:size-32" />
        <Constellation className="pointer-events-none absolute bottom-8 left-1/2 hidden w-40 -translate-x-1/2 text-primary/20 lg:block" />

        <p className="text-xs uppercase tracking-[0.4em] text-primary/80">
          The Ultimate Guide to Astrology
        </p>

        <h1 className="mt-6 max-w-3xl text-balance font-serif text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Get Clarity, Guidance <span className="italic text-primary">&amp;</span> Peace of Mind
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          The stars have whispered since the dawn of time. Let their ancient wisdom illuminate your
          path — through personalized readings, daily horoscopes, and the timeless language of the cosmos.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/services"
            className="rounded-full bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-[0_0_28px_-6px_var(--gold)]"
          >
            Book Reading Now
          </Link>
          <Link
            href="#zodiac"
            className="rounded-full border border-primary/50 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary/10"
          >
            Explore Signs
          </Link>
        </div>
      </div>
    </section>
  )
}
