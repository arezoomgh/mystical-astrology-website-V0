import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { Divider } from "@/components/celestial"

export const metadata: Metadata = {
  title: "Blog — Celestia",
  description:
    "Insights, rituals, and cosmic wisdom from the Celestia astrologers. Explore lunar cycles, retrogrades, and the language of the stars.",
}

const featured = {
  category: "Lunar Wisdom",
  title: "Working with the New Moon: A Ritual for Setting Intentions",
  excerpt:
    "The new moon is the sky's invitation to begin again. Learn how to harness its dark, fertile energy to plant the seeds of the life you wish to grow over the coming lunar cycle.",
  date: "March 12",
  read: "6 min read",
}

const posts = [
  {
    category: "Planets",
    title: "Mercury Retrograde: Myth, Meaning & How to Move Through It",
    excerpt: "Not the villain it's made out to be — a closer look at the planet of communication in reverse.",
    date: "March 8",
    read: "5 min",
  },
  {
    category: "Elements",
    title: "Fire, Earth, Air & Water: Understanding the Four Elements",
    excerpt: "The elemental foundation beneath every zodiac sign, and what yours reveals about you.",
    date: "March 2",
    read: "7 min",
  },
  {
    category: "Houses",
    title: "The Twelve Houses: Where Your Chart Comes to Life",
    excerpt: "From identity to legacy — a beginner's map of the astrological houses.",
    date: "Feb 24",
    read: "8 min",
  },
  {
    category: "Love",
    title: "Venus Signs & the Language of How You Love",
    excerpt: "Your Venus placement reveals what you cherish and how you give affection.",
    date: "Feb 18",
    read: "6 min",
  },
  {
    category: "Rituals",
    title: "A Full Moon Release Ceremony for Letting Go",
    excerpt: "Simple, grounding practices to shed what no longer serves you under the full moon.",
    date: "Feb 11",
    read: "5 min",
  },
  {
    category: "Cosmos",
    title: "Reading the Night Sky: An Introduction to the Zodiac Wheel",
    excerpt: "Where astrology meets astronomy in the great turning wheel above us.",
    date: "Feb 4",
    read: "9 min",
  },
]

export default function BlogPage() {
  return (
    <PageShell>
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/80">The Celestia Journal</p>
          <h1 className="mt-5 font-serif text-5xl font-light tracking-tight sm:text-6xl">
            Cosmic <span className="italic text-primary">Wisdom</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Reflections on the moon, the planets, and the ancient art of reading the sky — written to
            guide your practice and deepen your understanding.
          </p>
        </header>

        <Divider className="my-14" />

        {/* Featured */}
        <Link
          href="#"
          className="group grid gap-8 rounded-2xl border border-border/60 bg-card/50 p-8 transition-colors hover:border-primary/60 lg:grid-cols-2 lg:items-center"
        >
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-primary/25 bg-gradient-to-br from-[oklch(0.22_0.04_235)] to-[oklch(0.18_0.04_245)]">
            <span aria-hidden="true" className="font-serif text-8xl text-primary/70">
              ☾
            </span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary/80">
              {featured.category}
            </span>
            <h2 className="mt-3 font-serif text-3xl font-light leading-tight text-foreground group-hover:text-primary sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{featured.excerpt}</p>
            <p className="mt-5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {featured.date} · {featured.read}
            </p>
          </div>
        </Link>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.title}
              href="#"
              className="group flex flex-col rounded-xl border border-border/60 bg-card/50 p-7 transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-primary/80">{p.category}</span>
              <h3 className="mt-3 font-serif text-2xl font-light leading-snug text-foreground group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {p.date} · {p.read}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
