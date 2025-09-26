// Corrected code for: app/[religion]/religion-page-client.tsx

"use client";

import { Navbar } from "@/components/navbar";
import { FestivalCard } from "@/components/festival-card";
import { getFestivals } from "@/lib/festivals";
import { type Religion } from "@/lib/data";

// This component receives the 'params' as a prop from the Server Component
export default function ReligionPageClient({ params }: { params: { religion: string } }) {
  // 1. Get the list of festivals for the current religion
  const festivals = getFestivals(params.religion as Religion);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-serif text-3xl capitalize">{params.religion} Festivals</h1>
        <p className="mt-1 text-muted-foreground">
          Explore the vibrant celebrations and rich traditions of {params.religion}.
        </p>

        {/* 2. Map over the festivals and render a card for each one */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {festivals.map((fest) => (
            <FestivalCard
              key={fest.slug}
              href={`/${params.religion}/${fest.slug}`}
              title={fest.title}
              subtitle={fest.subtitle}
              imageQuery={fest.imageQuery}
              imageAlt={fest.title}
            />
          ))}
        </div>
      </main>
    </>
  );
}