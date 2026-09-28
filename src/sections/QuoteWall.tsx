import { useMemo, useState } from 'react'
import { Heart, Quote as QuoteIcon } from 'lucide-react'
import { QUOTES, CATEGORIES, type Category } from '@/data/quotes'
import { useFavorites } from '@/hooks/useFavorites'
import { cn } from '@/lib/utils'

type Filter = Category | 'All' | 'Favorites'

export default function QuoteWall() {
  const [filter, setFilter] = useState<Filter>('All')
  const { favorites, toggle, isFavorite } = useFavorites()

  const visible = useMemo(() => {
    if (filter === 'All') return QUOTES
    if (filter === 'Favorites') return QUOTES.filter((q) => favorites.includes(q.id))
    return QUOTES.filter((q) => q.category === filter)
  }, [filter, favorites])

  return (
    <section className="relative border-t border-border px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl uppercase sm:text-6xl">
            The <span className="text-primary">Wall</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every quote in the arsenal. Save the ones that hit hardest.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {(['All', ...CATEGORIES, 'Favorites'] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'min-h-[44px] rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors sm:text-sm',
                filter === f
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground'
              )}
            >
              {f === 'Favorites' ? `♥ Favorites (${favorites.length})` : f}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border py-16 text-center text-muted-foreground">
            <Heart className="mx-auto mb-3 h-8 w-8 opacity-40" />
            No favorites yet. Tap the heart on any quote to keep it here.
          </div>
        ) : (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {visible.map((q) => (
              <article
                key={q.id}
                className="group break-inside-avoid rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-primary">
                    {q.category}
                  </span>
                  <button
                    onClick={() => toggle(q.id)}
                    aria-label="Toggle favorite"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Heart
                      className={cn(
                        'h-4.5 w-4.5 h-[18px] w-[18px]',
                        isFavorite(q.id) && 'fill-primary text-primary'
                      )}
                    />
                  </button>
                </div>
                <QuoteIcon className="mb-2 h-4 w-4 text-primary/60" />
                <p className="text-base font-semibold leading-snug">{q.text}</p>
                <p className="font-mono2 mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                  — {q.author}
                </p>
                <p className="mt-3 border-t border-border pt-3 text-sm text-muted-foreground">
                  <span className="font-bold uppercase tracking-wider text-primary">Move: </span>
                  {q.spark}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
