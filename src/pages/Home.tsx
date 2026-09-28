import Hero from '@/sections/Hero'
import QuoteEngine from '@/sections/QuoteEngine'
import QuoteWall from '@/sections/QuoteWall'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <main className="noise min-h-screen bg-background text-foreground">
      <Hero />
      <QuoteEngine />
      <QuoteWall />
      <Footer />
    </main>
  )
}
