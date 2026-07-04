import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { Divider, Sunburst, CrescentMoon, StarLine, Constellation } from "@/components/celestial"

export const metadata: Metadata = {
  title: "Services & Readings — Celestia",
  description:
    "Explore Celestia's astrology readings — birth charts, love compatibility, career guidance, and personal one-on-one sessions.",
}

const services = [
  {
    icon: Sunburst,
    name: "Natal Birth Chart",
    price: "$120",
    duration: "60 min",
    text: "A complete map of the sky at your moment of birth, decoded to reveal your core nature, gifts, and life themes.",
  },
  {
    icon: Heart2,
    name: "Love & Compatibility",
    price: "$95",
    duration: "45 min",
    text: "Synastry between two charts to illuminate the dynamics, harmony, and growth edges of your relationship.",
  },
  {
    icon: StarLine,
    name: "Career & Purpose",
    price: "$110",
    duration: "50 min",
    text: "Align your path with your cosmic calling. Discover the vocations and timing the stars favor for you.",
  },
  {
    icon: CrescentMoon,
    name: "Year Ahead Forecast",
    price: "$140",
    duration: "75 min",
    text: "A personalized transit reading mapping the opportunities and turning points of your coming year.",
  },
  {
    icon: Constellation,
    name: "Tarot & Oracle",
    price: "$80",
    duration: "40 min",
    text: "Intuitive guidance drawn from the cards, blending symbolism and astrology for clarity on a pressing question.",
  },
  {
    icon: Sunburst,
    name: "Full Life Reading",
    price: "$220",
    duration: "120 min",
    text: "Our most in-depth session — chart, transits, and guidance woven into a complete portrait of your journey.",
  },
]

const steps = [
  { n: "01", title: "Choose Your Reading", text: "Select the session that speaks to your current questions and season of life." },
  { n: "02", title: "Share Your Details", text: "Provide your birth date, time, and place so we can cast your unique chart." },
  { n: "03", title: "Meet Your Astrologer", text: "Connect for a live session and receive a recording and written summary to keep." },
]

// local heart icon to keep a consistent gold line-art look
function Heart2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      <path
        d="M50 82C30 68 14 55 14 38a20 20 0 0 1 36-12 20 20 0 0 1 36 12c0 17-16 30-36 44Z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/80">Readings & Rituals</p>
          <h1 className="mt-5 font-serif text-5xl font-light tracking-tight sm:text-6xl">
            Our <span className="italic text-primary">Services</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Each reading is crafted with care by our practicing astrologers — a sacred conversation
            between you, your chart, and the wisdom of the cosmos.
          </p>
        </header>

        <Divider className="my-14" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex flex-col rounded-xl border border-border/60 bg-card/50 px-7 py-8 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_30px_-10px_var(--gold)]"
            >
              <s.icon className="size-11 text-primary" />
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-serif text-2xl text-primary">{s.name}</h3>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
                <span className="text-lg font-medium text-foreground/90">{s.price}</span>
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {s.duration}
                </span>
              </div>
              <Link
                href="#book"
                className="mt-5 rounded-full border border-primary/50 px-6 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary/10"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-12 lg:px-10">
        <h2 className="text-center font-serif text-4xl font-light tracking-wide">
          How It <span className="italic text-primary">Works</span>
        </h2>
        <Divider className="my-12" />
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <span className="font-serif text-5xl text-primary/50">{s.n}</span>
              <h3 className="mt-4 font-serif text-2xl text-primary">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center lg:px-10">
        <div className="rounded-2xl border border-primary/30 bg-card/60 px-8 py-14">
          <h2 className="font-serif text-4xl font-light leading-tight">
            Reserve Your <span className="italic text-primary">Reading</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Leave your details and our team will reach out to schedule your session beneath the stars.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-4">
            <input
              type="text"
              placeholder="Your name"
              aria-label="Your name"
              className="rounded-lg border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary/70"
            />
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              className="rounded-lg border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/70 focus:border-primary/70"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-[0_0_28px_-6px_var(--gold)]"
            >
              Request Booking
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  )
}
