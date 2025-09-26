export type Religion = "hinduism" | "islam" | "christianity" | "sikh";

export const religions: { key: string; name: string; emoji: string; blurb: string }[] = [
  { key: "hinduism", name: "Hindu", emoji: "🕉️", blurb: "Festivals of light, color, and devotion." },
  { key: "islam", name: "Muslim", emoji: "☪️", blurb: "Celebrations of faith and community." },
  { key: "christianity", name: "Christian", emoji: "✝️", blurb: "Moments of hope and togetherness." },
  { key: "sikh", name: "Sikh", emoji: "🪯", blurb: "Spirit of service and harvest." },
];

export const festivals: Record<
  string,
  {
    slug: string
    title: string
    subtitle: string
    imageQuery: string
    wiki: string
    products: { id: string; title: string; price: string; href: string; imageQuery: string; imageAlt: string }[]
  }[]
> = {
  hinduism: [
    {
      slug: "diwali",
      title: "Diwali",
      subtitle: "Festival of Lights",
      imageQuery: "diwali lamps diyas celebration night",
      wiki: "Diwali, the Festival of Lights, celebrates the triumph of light over darkness. Homes glow with diyas, rangoli patterns adorn thresholds, and families gather to share sweets and gratitude.",
      products: [
        {
          id: "d1",
          title: "Brass Diyas (Set of 6)",
          price: "$18",
          href: "https://www.amazon.com",
          imageQuery: "brass diyas set",
          imageAlt: "Brass diyas",
        },
        {
          id: "d2",
          title: "Rangoli Powder Kit",
          price: "$12",
          href: "https://www.amazon.com",
          imageQuery: "rangoli powder kit",
          imageAlt: "Rangoli powder",
        },
        {
          id: "d3",
          title: "Scented Candle Duo",
          price: "$22",
          href: "https://www.myntra.com",
          imageQuery: "scented candles festive",
          imageAlt: "Candles",
        },
      ],
    },
    {
      slug: "holi",
      title: "Holi",
      subtitle: "Festival of Colors",
      imageQuery: "holi colors celebration powder",
      wiki: "Holi bursts with color and camaraderie, marking the arrival of spring. Friends and families celebrate with vibrant colors.",
      products: [
        {
          id: "h1",
          title: "Organic Gulal (4 colors)",
          price: "$14",
          href: "https://www.amazon.com",
          imageQuery: "organic gulal holi colors",
          imageAlt: "Gulal",
        },
        {
          id: "h2",
          title: "White Cotton Kurta",
          price: "$29",
          href: "https://www.myntra.com",
          imageQuery: "white kurta holi",
          imageAlt: "Kurta",
        },
      ],
    },
  ],
  islam: [
    {
      slug: "eid",
      title: "Eid al-Fitr",
      subtitle: "Festival of Breaking the Fast",
      imageQuery: "eid crescent lanterns cookies",
      wiki: "Eid al-Fitr marks the end of Ramadan with prayer, charity, and festive meals shared among loved ones.",
      products: [
        {
          id: "e1",
          title: "Moon & Lantern Decor",
          price: "$20",
          href: "https://www.amazon.com",
          imageQuery: "eid lantern decor",
          imageAlt: "Lantern decor",
        },
        {
          id: "e2",
          title: "Dates Gift Box",
          price: "$17",
          href: "https://www.amazon.com",
          imageQuery: "premium dates box",
          imageAlt: "Dates",
        },
      ],
    },
  ],
  christianity: [
    {
      slug: "christmas",
      title: "Christmas",
      subtitle: "Season of Joy",
      imageQuery: "christmas tree lights cozy",
      wiki: "Christmas celebrates hope and generosity. Trees shimmer with lights, carols fill the air, and tables gather the flavors of the season.",
      products: [
        {
          id: "c1",
          title: "Warm String Lights",
          price: "$16",
          href: "https://www.amazon.com",
          imageQuery: "warm string lights",
          imageAlt: "String lights",
        },
        {
          id: "c2",
          title: "Cinnamon Candle",
          price: "$12",
          href: "https://www.amazon.com",
          imageQuery: "cinnamon candle",
          imageAlt: "Cinnamon candle",
        },
      ],
    },
  ],
  sikh: [
    {
      slug: "baisakhi",
      title: "Baisakhi",
      subtitle: "Harvest & Khalsa Day",
      imageQuery: "baisakhi harvest celebration sikh",
      wiki: "Baisakhi honors the spring harvest and the founding of the Khalsa. Communities gather for music, food, and processions.",
      products: [
        {
          id: "s1",
          title: "Phulkari Dupatta",
          price: "$24",
          href: "https://www.myntra.com",
          imageQuery: "phulkari dupatta embroidery",
          imageAlt: "Phulkari dupatta",
        },
        {
          id: "s2",
          title: "Traditional Kada",
          price: "$15",
          href: "https://www.amazon.com",
          imageQuery: "sikh kada bracelet",
          imageAlt: "Kada bracelet",
        },
      ],
    },
  ],
}
