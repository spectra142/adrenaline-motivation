import { useCallback, useMemo, useState } from 'react'
import { Heart, Copy, Check, RefreshCw, Flame } from 'lucide-react'
import { QUOTES, CATEGORIES, type Category, type Quote } from '@/data/quotes'
import { useFavorites } from '@/hooks/useFavorites'
import { cn } from '@/lib/utils'

function pickRandom(pool: Quote[], excludeId?: number): Quote {
  const options = pool.filter((q) => q.id !== excludeId)
  const list = options.length > 0 ? options : pool
  return list[Math.floor(Math.random() * list.length)]
}

export default function QuoteEngine() {
  const [category, setCategory] = useState<Category | 'All'>('All')
  const [quote, setQuote] = useState<Quote>(() => pickRandom(QUOTES))
  const [copied, setCopied] = useState(false)
  const [count, setCount] = useState(0)
  const { toggle, isFavorite } = useFavorites()

  const pool = useMemo(
    () => (category === 'All' ? QUOTES : QUOTES.filter((q) => q.category === category)),
    [category]
  )

  const next = useCallback(() => {
    setQuote((prev) => pickRandom(pool, prev.id))
    setCount((c) => c + 1)
    setCopied(false)
  }, [pool])

  const selectCategory = (c: Category | 'All') => {
    setCategory(c)
    const newPool = c === 'All' ? QUOTES : QUOTES.filter((q) => q.category === c)
    setQuote((prev) => pickRandom(newPool, prev.id))
    setCount((n) => n + 1)
    setCopied(false)
  }

  const copy = async () => {
    const text = `"${quote.text}" — ${quote.author}`
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="engine" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="font-display text-4xl uppercase sm:text-6xl">
            The <span className="text-primary">Engine</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            One tap. One quote. One action. No scrolling required.
          </p>
        </div>

        {/* category chips */}
        <div className="flex flex-wrap justify-center gap-2">
          {(['All', ...CATEGORIES] as const).map((c) => (
            <button
              key={c}
              onClick={() => selectCategory(c)}
              className={cn(
                'min-h-[44px] rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-colors',
                category === c
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground'
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* quote card */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-10">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/15 blur-[80px]"
          />
          <div key={`${quote.id}-${count}`} className="animate-quote-in relative flex flex-col gap-6">
            <span className="font-mono2 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-primary">
              <Flame className="h-3.5 w-3.5" />
              {quote.category}
            </span>

            <blockquote className="text-balance text-2xl font-bold leading-snug sm:text-4xl">
              “{quote.text}”
            </blockquote>

            <p className="font-mono2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              — {quote.author}
            </p>

            {/* the spark */}
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Your move
              </p>
              <p className="mt-1.5 text-base font-medium sm:text-lg">{quote.spark}</p>
            </div>

            {/* actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={next}
                className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-transform duration-150 hover:scale-[1.02] active:scale-95 sm:flex-none"
              >
                <RefreshCw className="h-4 w-4" />
                Another one
              </button>
              <button
                onClick={copy}
                aria-label="Copy quote"
                className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-md border border-border bg-secondary px-4 py-3 text-secondary-foreground transition-colors hover:border-primary/50"
              >
                {copied ? <Check className="h-5 w-5 text-primary" /> : <Copy className="h-5 w-5" />}
              </button>
              <button
                onClick={() => toggle(quote.id)}
                aria-label="Save to favorites"
                className={cn(
                  'inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-md border px-4 py-3 transition-colors',
                  isFavorite(quote.id)
                    ? 'border-primary bg-primary/10'
                    : 'border-border bg-secondary hover:border-primary/50'
                )}
              >
                <Heart
                  className={cn(
                    'h-5 w-5',
                    isFavorite(quote.id) && 'fill-primary text-primary'
                  )}
                />
              </button>
            </div>
          </div>
        </div>

        <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {count === 0 ? 'First one\'s free' : `${count} shot${count === 1 ? '' : 's'} of adrenaline`}
        </p>
      </div>
    </section>
  )
}
