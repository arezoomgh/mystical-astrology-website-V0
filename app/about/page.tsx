import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { Divider, Sunburst, CrescentMoon, StarLine } from "@/components/celestial"

export const metadata: Metadata = {
  title: "About Us — Celestia",
  description:
    "Meet Celestia — a collective of astrologers devoted to guiding you toward clarity, meaning, and peace of mind through the ancient wisdom of the stars.",
}

const values = [
  {
    icon: Sunburst,
    title: "Ancient Wisdom",
    text: "We honor astrological traditions passed down through millennia, blending them with modern insight.",
  },
  {
    icon: CrescentMoon,
    title: "Compassionate Guidance",
    text: "Every reading is a safe, judgment-free space held with warmth, care, and genuine intention.",
  },
  {
    icon: StarLine,
    title: "Empowered Choice",
    text: "The stars incline, they do not compel. We illuminate the path so the choice always remains yours.",
  },
]

const team = [
  { name: "Seraphina Vale", role: "Founder & Lead Astrologer", sign: "Scorpio ♏" },
  { name: "Orion Marsh", role: "Vedic & Natal Charts", sign: "Capricorn ♑" },
  { name: "Luna Beaumont", role: "Tarot & Intuitive Guidance", sign: "Pisces ♓" },
]

export default function AboutPage() {
  return (
    <PageShell>
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-14 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.4em] text-primary/80">Our Story</p>
        <h1 className="mt-5 font-serif text-5xl font-light tracking-tight sm:text-6xl">
          Guided by the <span className="italic text-primary">Stars</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          Celestia was born from a simple belief: that the sky has always been humanity&apos;s first
          map. For thousands of years, we have looked upward for meaning, direction, and comfort. Our
          mission is to translate that timeless language into guidance that helps you live with more
          intention, clarity, and peace.
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
        <Divider className="my-6" />
      </section>

      {/* Values */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-12 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex flex-col items-center rounded-xl border border-border/60 bg-card/50 px-8 py-10 text-center"
            >
              <v.icon className="size-12 text-primary" />
              <h3 className="mt-6 font-serif text-2xl text-primary">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-12 lg:px-10">
        <h2 className="text-center font-serif text-4xl font-light tracking-wide">
          Meet Our <span className="italic text-primary">Astrologers</span>
        </h2>
        <Divider className="my-12" />
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center rounded-xl border border-border/60 bg-card/50 px-8 py-10 text-center"
            >
              <span className="flex size-20 items-center justify-center rounded-full border border-primary/40 font-serif text-3xl text-primary">
                {m.name.charAt(0)}
              </span>
              <h3 className="mt-5 font-serif text-2xl text-foreground">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-primary/80">{m.sign}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 py-12 text-center lg:px-10">
        <div className="rounded-2xl border border-primary/30 bg-card/60 px-8 py-14">
          <h2 className="font-serif text-4xl font-light leading-tight">
            Begin Your <span className="italic text-primary">Journey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Whether you are new to astrology or a lifelong seeker, there is a place for you here.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-block rounded-full bg-primary px-9 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-[0_0_28px_-6px_var(--gold)]"
          >
            Explore Readings
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
