import Link from "next/link"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  name: string
  href: string
  emoji: string
  description: string
}

export function ReligionCard({ name, href, emoji, description }: Props) {
  return (
    <Link href={href} className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl">
      <Card className="transition hover:-translate-y-0.5 hover:shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between font-serif">
            <span>{name}</span>
            <span aria-hidden className="text-2xl transition group-hover:scale-110">
              {emoji}
            </span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardHeader>
      </Card>
    </Link>
  )
}
