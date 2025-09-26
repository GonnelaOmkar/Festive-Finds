"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { religions, type Religion } from "@/lib/data"
import { FestivalCard } from "@/components/festival-card"
import { Input } from "@/components/ui/input"
import { useParams } from "next/navigation"
import { getFestivals, type FestivalMerged } from "@/lib/festivals"

// This function tells Next.js which religion pages to build
export async function generateStaticParams() {
  // In a real app, you would get this data from the same source as before
  const religions = [
    { religion: 'hinduism' },
    { religion: 'christianity' },
    { religion: 'islam' },
    // ...add all other unique religions here
  ];

  return religions.map((item) => ({
    religion: item.religion,
  }));
}

// This ensures only the paths listed above are generated
export const dynamicParams = false;

export default function FestivalsListPage() {
  const params = useParams<{ religion: string }>()
  const key = (params?.religion || "hindu") as Religion

  const [q, setQ] = useState("")

  const list = getFestivals(key) as FestivalMerged[]
  const filtered = useMemo(() => {
    const x = q.trim().toLowerCase()
    if (!x) return list
    return list.filter((f) => f.title.toLowerCase().includes(x) || f.subtitle.toLowerCase().includes(x))
  }, [list, q])

  const rel = religions.find((r) => r.key === key)

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4">
        {/* Festive Finds site name */}
        <h2 className="mb-2 text-2xl font-bold text-primary">Festive Finds</h2>
        <div className="flex items-end justify-between gap-4 py-8">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Festivals — {rel?.name}</p>
            <h1 className="font-serif text-3xl md:text-4xl">Choose a festival</h1>
          </div>
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search festivals"
            aria-label="Search festivals"
            className="w-56"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((f) => (
            <FestivalCard
              key={f.slug}
              href={`/${key}/${f.slug}`}
              title={f.title}
              subtitle={f.subtitle}
              imageAlt={`${f.title} image`}
              imageQuery={f.imageQuery}
            />
          ))}
        </div>

        <div className="mt-10 text-sm text-muted-foreground">
          <Link href="/" className="underline">
            Back to categories
          </Link>
        </div>
      </main>
    </>
  )
}
