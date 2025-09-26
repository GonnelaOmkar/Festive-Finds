import Link from "next/link"
import Image from "next/image"

type Props = {
  href: string
  title: string
  subtitle: string
  imageAlt: string
  imageQuery: string
}

export function FestivalCard({ href, title, subtitle, imageAlt, imageQuery }: Props) {
  return (
    <Link
      href={href}
      className="group block [perspective:1000px] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
    >
      <div className="relative h-56 w-full rounded-xl border bg-card shadow-sm transition will-change-transform [transform-style:preserve-3d] duration-500 group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 grid place-items-center rounded-xl [backface-visibility:hidden]">
          <Image
  src={`https://source.unsplash.com/384x240/?${encodeURIComponent(imageQuery)}`} // Using a real image service
  alt={imageAlt}
  width={384}
  height={240}
  className="h-full w-full rounded-xl object-cover"
/>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/70 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="font-serif text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 grid place-items-center rounded-xl bg-secondary p-4 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-pretty text-sm text-foreground">
            Learn the story, rituals, and explore curated products for {title}.
          </p>
          <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
            View details →
          </span>
        </div>
      </div>
    </Link>
  )
}
