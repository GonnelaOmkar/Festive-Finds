import { festivals as base, type Religion } from "@/lib/data"
import { extraFestivals, type ExtraFestival } from "@/lib/festival-extras"

export type FestivalMerged = (typeof base)[Religion][number] & Partial<Pick<ExtraFestival, "wikipediaUrl">>
// Corrected part of: lib/festivals.ts

const wikiUrlMapping: Partial<Record<Religion, Record<string, string>>> = {
  hinduism: { // CHANGED
    diwali: "https://en.wikipedia.org/wiki/Diwali",
    holi: "https://en.wikipedia.org/wiki/Holi",
  },
  islam: { // CHANGED
    eid: "https://en.wikipedia.org/wiki/Eid_al-Fitr",
  },
  christianity: { // CHANGED
    christmas: "https://en.wikipedia.org/wiki/Christmas",
  },
  sikh: {
    baisakhi: "https://en.wikipedia.org/wiki/Vaisakhi",
  },
};

function attachWikiUrl<R extends Religion>(religion: R, list: FestivalMerged[]): FestivalMerged[] {
  const map = wikiUrlMapping[religion] || {}
  return list.map((f) => {
    const url = (f as any).wikipediaUrl || map[f.slug]
    return url ? { ...f, wikipediaUrl: url } : f
  })
}

export function getFestivals<R extends Religion>(religion: R): FestivalMerged[] {
  const baseList = (base[religion] || []) as FestivalMerged[]
  const extras = (extraFestivals[religion] || []) as unknown as FestivalMerged[]
  // de-duplicate by slug, prefer base then extras
  const bySlug = new Map<string, FestivalMerged>()
  for (const f of attachWikiUrl(religion, baseList)) bySlug.set(f.slug, f)
  for (const f of extras) if (!bySlug.has(f.slug)) bySlug.set(f.slug, f)
  return Array.from(bySlug.values())
}

export function getFestival<R extends Religion>(religion: R, slug: string): FestivalMerged | undefined {
  const list = getFestivals(religion)
  return list.find((f) => f.slug === slug)
}
