import ReligionPageClient from './religion-page-client' // We will create this file next
import Image from "next/image"
// ... other imports
// This server function stays here. It runs at build time.
export async function generateStaticParams() {
  const religions = [
    { religion: 'hinduism' },
    { religion: 'christianity' },
    { religion: 'islam' },
  ];
  return religions.map((item) => ({
    religion: item.religion,
  }));
}

export const dynamicParams = false;

// This is now a Server Component.
// It fetches data (if needed) and passes it to the Client Component.
export default function ReligionPage({ params }: { params: { religion: string } }) {
  // You can fetch data here if needed and pass it down as props.
  // For now, we'll just pass the params.
  return <ReligionPageClient params={params} />;
}
