import Link from "next/link";
import styles from "./Collections.module.css";
import CollectionsHeader from "@/components/CollectionsHeader";

const collections = [
  {
    title: "The Coat Room",
    description: "Timeless outerwear.",
    image: "/images/collections/coat-room-modern.webp?v=2",
  },
  {
    title: "Foundations",
    description: "Essential pieces. Perfected.",
    image: "/images/collections/foundations-modern.webp?v=1",
  },
  {
    title: "Soft Layers",
    description: "Relaxed knitwear. Refined for movement.",
    image: "/images/collections/soft-layers-yacht.webp?v=1",
  },
  {
    title: "Tailored Motion",
    description: "Modern trousers, cut for movement.",
    image: "/images/collections/leather-atelier.webp",
  },
  {
    title: "Weekender",
    description: "Made for the journey.",
    image: "/images/collections/weekender.webp",
  },
  {
    title: "Private Objects",
    description: "Accessories that define the details.",
    image: "/images/collections/private-objects.webp",
  },
];

export default function CollectionsPage() {
  return (
    <main className={styles.page}>
      <CollectionsHeader />

      <section className={styles.intro}>
        <div className={styles.introLight} />

        <h1>Objects of Ambition</h1>

        <p>Built for those who pursue more.</p>

        <span className={styles.introDivider} />
      </section>

      <section className={styles.collectionGrid}>
        {collections.map((collection) => (
          <Link
            className={styles.collectionCard}
            href="#"
            key={collection.title}
          >
            <img
              src={collection.image}
              alt={collection.title}
            />

            <span className={styles.cardShade} />

            <span className={styles.cardContent}>
              <span>
                <strong>{collection.title}</strong>
                <small>{collection.description}</small>
              </span>

              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </span>
          </Link>
        ))}
      </section>

      <footer className={styles.footer}>
        <span>Turin, Italy</span>

        <span>Pursue More.</span>

        <nav aria-label="Instagram">
          <a
            href="https://instagram.com/twnty4studio"
            target="_blank"
            rel="noreferrer"
          >
            @TWNTY4STUDIO
          </a>
        </nav>
      </footer>
    </main>
  );
}
