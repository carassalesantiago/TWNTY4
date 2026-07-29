import Link from "next/link";
import styles from "./Collections.module.css";
import CollectionsHeader from "@/components/CollectionsHeader";
import { collections } from "./collectionData";

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
            href={`/collections/${collection.slug}`}
            key={collection.slug}
            aria-label={`Discover ${collection.title}`}
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
