// Corrected code for: app/[religion]/page.tsx

import ReligionPageClient from './religion-page-client';
import { religions } from '@/lib/data'; // Import your data

// This function now reads from your data file
export async function generateStaticParams() {
  return religions.map((r) => ({
    religion: r.key,
  }));
}

export const dynamicParams = false;

export default function ReligionPage({ params }: { params: { religion: string } }) {
  return <ReligionPageClient params={params} />;
}