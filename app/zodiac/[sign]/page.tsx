import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, Heart, Briefcase, Sparkles } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { Divider } from "@/components/celestial"
import { getSign, zodiacSigns } from "@/lib/zodiac"

export function generateStaticParams() {
  return zodiacSigns.map((s) => ({ sign: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sign: string }>
}): Promise<Metadata> {
  const { sign } = await params
  const data = getSign(sign)
  if (!data) return { title: "Sign not found — Celestia" }
  return {
    title: `${data.name} Horoscope — Celestia`,
    description: `Today's horoscope and cosmic guidance for ${data.name} (${data.dates}).`,
  }
}

const today = () =>
  new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

export default async function ZodiacSignPage({
  params,
}: {
  params: Promise<{ sign: string }>
}) {
  const { sign } = await params
  const data = getSign(sign)
  if (!data) notFound()

  const facts = [
    { label: "Element", value: data.element },
    { label: "Quality", value: data.quality },
    { label: "Ruling", value: data.ruling },
    { label: "Dates", value: data.dates },
  ]

  const readings = [
    { icon: Heart, title: "Love", text: data.love },
    { icon: Briefcase, title: "Career", text: data.career },
    { icon: Sparkles, title: "Wellness", text: data.wellness },
  ]

  return (
    <PageShell>
      <article className="relative z-10 mx-auto max-w-4xl px-6 py-12 lg:px-10">
        <Link
          href="/#zodiac"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" /> All Signs
        </Link>

        {/* Header */}
        <header className="mt-10 flex flex-col items-center text-center">
          <span
            aria-hidden="true"
            className="astro-glyph flex size-28 items-center justify-center rounded-full border border-primary/40 text-7xl text-primary shadow-[0_0_40px_-12px_var(--gold)]"
          >
            {`${data.symbol}\uFE0E`}
          </span>
          <h1 className="mt-6 font-serif text-5xl font-light tracking-wide sm:text-6xl">
            {data.name}
          </h1>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-primary/80">{data.dates}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {data.traits.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        <Divider className="my-14" />

        {/* Daily horoscope */}
        <section className="rounded-2xl border border-primary/30 bg-card/60 px-8 py-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Daily Horoscope</p>
          <p className="mt-1 text-xs tracking-wider text-muted-foreground">{today()}</p>
          <p className="mx-auto mt-6 max-w-2xl text-pretty font-serif text-2xl font-light leading-relaxed text-foreground/90">
            {data.horoscope}
          </p>
        </section>

        {/* Facts */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-border/60 bg-card/40 px-4 py-5 text-center"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.label}</p>
              <p className="mt-2 font-serif text-lg text-primary">{f.value}</p>
            </div>
          ))}
        </div>

        {/* Category readings */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {readings.map((r) => (
            <div key={r.title} className="rounded-xl border border-border/60 bg-card/50 px-6 py-8">
              <r.icon className="size-7 text-primary" />
              <h3 className="mt-4 font-serif text-xl text-primary">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>

        {/* Lucky + About */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card/50 px-8 py-8">
            <h3 className="font-serif text-xl text-primary">About {data.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{data.about}</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/50 px-8 py-8">
            <h3 className="font-serif text-xl text-primary">Today&apos;s Fortunes</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex justify-between border-b border-border/40 pb-3">
                <span className="uppercase tracking-[0.15em] text-muted-foreground">Lucky Number</span>
                <span className="text-foreground/90">{data.lucky.number}</span>
              </li>
              <li className="flex justify-between border-b border-border/40 pb-3">
                <span className="uppercase tracking-[0.15em] text-muted-foreground">Lucky Color</span>
                <span className="text-foreground/90">{data.lucky.color}</span>
              </li>
              <li className="flex justify-between">
                <span className="uppercase tracking-[0.15em] text-muted-foreground">Lucky Day</span>
                <span className="text-foreground/90">{data.lucky.day}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Other signs */}
        <section className="mt-16">
          <h3 className="text-center font-serif text-2xl font-light text-primary">
            Explore Other Signs
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {zodiacSigns
              .filter((s) => s.slug !== data.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/zodiac/${s.slug}`}
                  className="flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-4 py-2 text-sm transition-colors hover:border-primary/70 hover:text-primary"
                >
                  <span aria-hidden="true" className="astro-glyph text-lg text-primary">
                    {`${s.symbol}\uFE0E`}
                  </span>
                  {s.name}
                </Link>
              ))}
          </div>
        </section>
      </article>
    </PageShell>
  )
}
