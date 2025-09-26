import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export type Product = {
  id: string
  title: string
  price: string
  href: string
  imageQuery: string
  imageAlt: string
}

export function ProductSection({ products }: { products: Product[] }) {
  return (
    <section aria-labelledby="products" className="mt-10">
      <h2 id="products" className="font-serif text-2xl">
        Curated products
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
          >
            <Card className="transition hover:-translate-y-0.5 hover:shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                <img
                  src={`/.jpg?height=240&width=384&query=${encodeURIComponent(p.imageQuery)}`}
                  alt={p.imageAlt}
                  className="h-44 w-full rounded-lg object-cover"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{p.price}</span>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">Buy</span>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  )
}
