import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { religions } from "@/lib/data"
import { ReligionCard } from "@/components/religion-card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="grid gap-6 py-12 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">Festiva</p>
            <h1 className="text-pretty font-serif text-4xl md:text-6xl">Discover festivals. Shop beautifully.</h1>
            <p className="text-pretty text-muted-foreground">
              Explore celebrations across cultures with elegant stories, curated products, and effortless navigation.
            </p>
            <div className="flex gap-3">
              <Link href="/auth/signup">
                <Button className="bg-accent text-accent-foreground hover:opacity-90">Create account</Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline">I already have an account</Button>
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-xl border">
            <img
              src="/festivals-collage-warm-editorial.jpg"
              alt="Collage of festival moments"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Categories */}
        <section className="py-8">
          <h2 className="font-serif text-2xl">Browse by faith</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {religions.map((r) => (
              <ReligionCard key={r.key} name={r.name} emoji={r.emoji} description={r.blurb} href={`/${r.key}`} />
            ))}
          </div>
        </section>
      </main>
      <footer className="mt-16 border-t py-8 text-center text-sm text-muted-foreground">
        Crafted with care • Accessible • Mobile-first
      </footer>
    </>
  )
}
