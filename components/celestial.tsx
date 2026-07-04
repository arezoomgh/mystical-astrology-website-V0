import type { SVGProps } from "react"

// Simple gold line-art celestial motifs used as decorative accents.

export function Sunburst(props: SVGProps<SVGSVGElement>) {
  const rays = Array.from({ length: 12 })
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      <circle cx="50" cy="50" r="16" />
      <circle cx="50" cy="50" r="22" strokeDasharray="1 4" />
      {rays.map((_, i) => {
        const a = (i / rays.length) * Math.PI * 2
        const r = (n: number) => Number(n.toFixed(3))
        const x1 = r(50 + Math.cos(a) * 28)
        const y1 = r(50 + Math.sin(a) * 28)
        const x2 = r(50 + Math.cos(a) * 40)
        const y2 = r(50 + Math.sin(a) * 40)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeLinecap="round" />
      })}
    </svg>
  )
}

export function CrescentMoon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      <path d="M62 12a40 40 0 1 0 0 76A46 46 0 0 1 62 12Z" />
      <circle cx="30" cy="30" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="24" cy="55" r="1" fill="currentColor" stroke="none" />
      <circle cx="38" cy="72" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function StarLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      <path
        d="M50 8 L55 42 L90 50 L55 58 L50 92 L45 58 L10 50 L45 42 Z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Constellation(props: SVGProps<SVGSVGElement>) {
  const pts = [
    [10, 70],
    [30, 40],
    [48, 55],
    [66, 24],
    [88, 38],
  ]
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" {...props}>
      <polyline points={pts.map((p) => p.join(",")).join(" ")} strokeLinecap="round" strokeLinejoin="round" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 2 === 0 ? 2 : 1.4} fill="currentColor" stroke="none" />
      ))}
    </svg>
  )
}

// Ornamental divider: a small star flanked by tapering lines.
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 text-primary/60 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50 sm:w-24" />
      <StarLine className="size-4" />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50 sm:w-24" />
    </div>
  )
}
