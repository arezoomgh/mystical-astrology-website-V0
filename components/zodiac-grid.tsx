import { zodiacSigns } from "@/lib/zodiac"
import { ZodiacCard } from "@/components/zodiac-card"
import { Divider } from "@/components/celestial"

export function ZodiacGrid() {
  return (
    <section id="zodiac" className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-10">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-primary/80">Discover your path</p>
        <h2 className="mt-4 font-serif text-4xl font-light tracking-wide sm:text-5xl">
          Choose Your <span className="italic text-primary">Zodiac Sign</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
          Select your sign to unveil today&apos;s horoscope, cosmic guidance, and the celestial forces
          shaping your journey.
        </p>
      </div>

      <Divider className="my-12" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {zodiacSigns.map((sign) => (
          <ZodiacCard key={sign.slug} sign={sign} />
        ))}
      </div>
    </section>
  )
}
