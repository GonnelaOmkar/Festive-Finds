// Corrected code for: app/[religion]/[festival]/page.tsx

import { Navbar } from "@/components/navbar"
import type { Religion } from "@/lib/data"
import { notFound } from "next/navigation"
import { ProductSection } from "@/components/product-section"
import { getFestival } from "@/lib/festivals"
import Image from "next/image" // 1. ADD THIS IMPORT

// This function tells Next.js which pages to build
export async function generateStaticParams() {
  const festivals = [
    { religion: 'hinduism', festival: 'diwali' },
    { religion: 'hinduism', festival: 'holi' },
    { religion: 'christianity', festival: 'christmas' },
    { religion: 'islam', festival: 'eid' },
    // ...add all other festival pages you want to pre-build
  ];

  return festivals.map((item) => ({
    religion: item.religion,
    festival: item.festival,
  }));
}

export const dynamicParams = false;

export default function FestivalDetails({
  params,
}: {
  params: { religion: Religion; festival: string }
}) {
  const fest = getFestival(params.religion, params.festival)
  if (!fest) notFound()

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="mb-2 text-2xl font-bold text-primary">Festive Finds</h2>
        <p className="text-sm text-muted-foreground capitalize">{params.religion} • Festival</p>
        <h1 className="mt-1 font-serif text-balance text-4xl">{fest!.title}</h1>
        <p className="mt-2 text-muted-foreground">{fest!.subtitle}</p>

        <div className="mt-6 overflow-hidden rounded-xl border">
          {/* 2. THIS IS THE REPLACEMENT FOR THE <img> TAG */}
          <Image
            src={`https://source.unsplash.com/1000x600/?${encodeURIComponent(fest!.imageQuery)}`}
            alt={`${fest!.title} hero`}
            width={1000}
            height={600}
            className="h-[320px] w-full object-cover md:h-[420px]"
            priority
          />
        </div>

        <article className="prose prose-neutral mt-6 max-w-none prose-headings:font-serif">
          <p className="text-pretty">{fest!.wiki}</p>
        </article>

        {fest?.wikipediaUrl ? (
          <div className="mt-4">
            <a
              href={fest.wikipediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Read more about ${fest.title} on Wikipedia`}
            >
              Read on Wikipedia →
            </a>
          </div>
        ) : null}

        <ProductSection products={fest!.products} />
      </main>
    </>
  )
}