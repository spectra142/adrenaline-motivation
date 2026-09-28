import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-14 text-center">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
        <Zap className="animate-heartbeat h-8 w-8 text-primary" />
        <p className="font-display text-2xl uppercase sm:text-3xl">
          Now close the tab. <span className="text-primary">Go do the thing.</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Motivation fades. Action compounds. Your favorites are saved in this
          browser — come back whenever you need another hit.
        </p>
      </div>
    </footer>
  )
}
