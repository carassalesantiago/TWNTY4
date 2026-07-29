export type Collection = {
  slug: string;
  title: string;
  description: string;
  image: string;
  statement: string;
  detail: string;
  number: string;
};

export const collections: Collection[] = [
  {
    slug: "the-coat-room",
    title: "The Coat Room",
    description: "Timeless outerwear.",
    image: "/images/collections/coat-room-modern.webp?v=2",
    statement: "An exercise in proportion, structure and permanence.",
    detail:
      "The first pieces are currently being refined. The drop will be released only when every silhouette meets the TWNTY4 standard.",
    number: "01",
  },
  {
    slug: "foundations",
    title: "Foundations",
    description: "Essential pieces. Perfected.",
    image: "/images/collections/foundations-modern.webp?v=1",
    statement: "The beginning of every considered wardrobe.",
    detail:
      "Essential forms, elevated through fabric, balance and restraint. Foundations is still being perfected before its first release.",
    number: "02",
  },
  {
    slug: "soft-layers",
    title: "Soft Layers",
    description: "Relaxed knitwear. Refined for movement.",
    image: "/images/collections/soft-layers-yacht.webp?v=1",
    statement: "Quiet comfort, shaped with intention.",
    detail:
      "Soft Layers is being developed around exceptional touch, natural movement and an uncompromising sense of ease.",
    number: "03",
  },
  {
    slug: "tailored-motion",
    title: "Tailored Motion",
    description: "Modern trousers, cut for movement.",
    image: "/images/collections/tailored-motion-final.webp?v=2",
    statement: "Precision should never restrict movement.",
    detail:
      "Every line is being reconsidered to create tailoring that moves naturally. The inaugural drop is not yet ready for release.",
    number: "04",
  },
  {
    slug: "weekender",
    title: "Weekender",
    description: "Made for the journey.",
    image: "/images/collections/weekender.webp",
    statement: "Objects designed to travel beyond the expected.",
    detail:
      "Weekender is currently taking form through considered materials, practical elegance and details made for movement.",
    number: "05",
  },
  {
    slug: "private-objects",
    title: "Private Objects",
    description: "Accessories that define the details.",
    image: "/images/collections/private-objects.webp",
    statement: "The smallest objects often reveal the most.",
    detail:
      "A private selection of accessories is being developed with the same discipline as every TWNTY4 garment.",
    number: "06",
  },
];

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}
