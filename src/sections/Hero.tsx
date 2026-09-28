import { Zap, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <header className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* glow backdrop */}
      <div
        aria-hidden
        className="animate-pulse-glow absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
      {/* grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative z-10 flex max-w-5xl flex-col items-center gap-6">
        <div className="font-mono2 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary">
          <Zap className="h-3.5 w-3.5" />
          Motivation · On Demand
        </div>

        <h1 className="font-display animate-flicker text-[clamp(3.5rem,12vw,9rem)] uppercase leading-[0.95]">
          Get up.
          <br />
          <span className="text-stroke">Get after</span>
          <br />
          <span className="text-primary">it.</span>
        </h1>

        <p className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
          A shot of adrenaline for your mindset. Real quotes, real fire, and one
          small action with every single one — because reading it isn't enough.
        </p>

        <a
          href="#engine"
          className="group mt-2 inline-flex min-h-[52px] items-center gap-3 rounded-md bg-primary px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          Hit me with it
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-1" />
        </a>
      </div>

      {/* bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/60 py-3 backdrop-blur">
        <div className="flex overflow-hidden">
          <div className="animate-marquee font-display flex shrink-0 gap-8 whitespace-nowrap text-sm uppercase tracking-[0.25em] text-muted-foreground">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex gap-8">
                {['No excuses', 'Discipline', 'One more rep', 'Courage', 'Do the work', 'Focus', 'Get up again', 'Grind', 'Be undeniable', 'Resilience'].map(
                  (w) => (
                    <span key={w} className="flex items-center gap-8">
                      {w} <span className="text-primary">✦</span>
                    </span>
                  )
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
