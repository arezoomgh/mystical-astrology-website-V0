// Deterministic pseudo-random so server and client render identically
function seeded(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const STAR_COUNT = 90

export function Starfield() {
  const stars = Array.from({ length: STAR_COUNT }, (_, i) => {
    const top = seeded(i + 1) * 100
    const left = seeded(i + 100) * 100
    const size = seeded(i + 200) * 2 + 0.5
    const delay = seeded(i + 300) * 6
    const duration = seeded(i + 400) * 3 + 2.5
    const bright = seeded(i + 500) > 0.8
    return { top, left, size, delay, duration, bright }
  })

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: s.bright ? "var(--gold)" : "oklch(0.98 0.01 90)",
            opacity: s.bright ? 0.9 : 0.55,
            boxShadow: s.bright ? "0 0 6px var(--gold)" : "0 0 4px rgba(255,255,255,0.5)",
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
