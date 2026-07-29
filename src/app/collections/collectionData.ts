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
    slug: "private-objects",
    title: "Private Objects",
    description: "Belts & underwear.",
    image: "/images/collections/private-objects-final.webp?v=1",
    statement: "The objects closest to us deserve equal consideration.",
    detail:
      "Belts and underwear designed with the same restraint, material quality and attention to detail as every TWNTY4 garment.",
    number: "05",
  },
  {
    slug: "second-project",
    title: "Second Project",
    description: "A new chapter is taking shape.",
    image: "",
    statement: "A new chapter is taking shape.",
    detail:
      "Second Project is currently being developed in private. Its purpose, form and direction will be revealed only when the concept fully reflects the TWNTY4 vision.",
    number: "06",
  },
];

export function getCollection(slug: string) {
  return collections.find(
    (collection) => collection.slug === slug
  );
}
