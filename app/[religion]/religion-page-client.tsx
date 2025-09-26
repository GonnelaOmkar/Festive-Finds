"use client";

// Your original page component code goes here
export default function ReligionPageClient({ params }: { params: { religion: string } }) {
  return (
    <div>
      <h1>Festivals in {params.religion}</h1>
      {/* ...the rest of your UI and interactive logic... */}
    </div>
  );
}