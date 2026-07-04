import { PageShell } from "@/components/page-shell"
import { Hero } from "@/components/hero"
import { ZodiacGrid } from "@/components/zodiac-grid"
import { Divider, Sunburst, CrescentMoon, StarLine } from "@/components/celestial"
import Link from "next/link"

const offerings = [
  {
    icon: Sunburst,
    title: "Daily Horoscopes",
    text: "Wake to fresh cosmic guidance every morning, tailored to the movements of your ruling planets.",
  },
  {
    icon: CrescentMoon,
    title: "Birth Chart Readings",
    text: "Uncover the celestial blueprint written at the moment you drew your first breath.",
  },
  {
    icon: StarLine,
    title: "Personal Guidance",
    text: "One-on-one sessions with our astrologers to navigate love, career, and life's crossroads.",
  },
]

export default function Page() {
  return (
    <PageShell>
      <Hero />
      <ZodiacGrid />

      {/* Offerings */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-primary/80">What we offer</p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-wide sm:text-5xl">
            Guidance Written in the <span className="italic text-primary">Stars</span>
          </h2>
        </div>
        <Divider className="my-12" />
        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((o) => (
            <div
              key={o.title}
              className="flex flex-col items-center rounded-xl border border-border/60 bg-card/50 px-8 py-10 text-center"
            >
              <o.icon className="size-12 text-primary" />
              <h3 className="mt-6 font-serif text-2xl text-primary">{o.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center lg:px-10">
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card/60 px-8 py-16">
          <Sunburst className="pointer-events-none absolute -right-8 -top-8 size-40 text-primary/10" />
          <CrescentMoon className="pointer-events-none absolute -bottom-10 -left-8 size-40 text-primary/10" />
          <h2 className="relative font-serif text-4xl font-light leading-tight sm:text-5xl">
            Ready to hear what the <span className="italic text-primary">universe</span> has to say?
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Begin your journey toward clarity today. Your first reading is a step into a more
            intentional, star-guided life.
          </p>
          <Link
            href="/services"
            className="relative mt-8 inline-block rounded-full bg-primary px-9 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-[0_0_28px_-6px_var(--gold)]"
          >
            Book Reading Now
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
