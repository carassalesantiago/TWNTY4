import Link from "next/link";
import { notFound } from "next/navigation";
import CollectionsHeader from "@/components/CollectionsHeader";
import {
  collections,
  getCollection,
} from "../collectionData";
import styles from "./CollectionDrop.module.css";

type CollectionDropPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export default async function CollectionDropPage({
  params,
}: CollectionDropPageProps) {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <CollectionsHeader />

      <section className={styles.hero}>
        <div
          className={styles.background}
          style={
            collection.image
              ? {
                  backgroundImage: `url("${collection.image}")`,
                }
              : {
                  backgroundImage:
                    "linear-gradient(145deg, #24211d 0%, #151311 52%, #090909 100%)",
                }
          }
        />

        <div className={styles.overlay} />
        <div className={styles.light} />

        <span className={styles.number}>
          Collection {collection.number}
        </span>

        <div className={styles.content}>
          <p className={styles.eyebrow}>
            A forthcoming TWNTY4 release
          </p>

          <h1>{collection.title}</h1>

          <p className={styles.statement}>
            {collection.statement}
          </p>

          <span className={styles.divider} />

          <p className={styles.detail}>
            {collection.detail}
          </p>

          <div className={styles.release}>
            <span>Drop status</span>
            <strong>Coming Soon</strong>
          </div>
        </div>

        <div className={styles.bottom}>
          <Link href="/collections">
            ← Return to collections
          </Link>

          <span>Released without compromise.</span>

          <a
            href="https://instagram.com/twnty4studio"
            target="_blank"
            rel="noreferrer"
          >
            Follow the process
          </a>
        </div>
      </section>
    </main>
  );
}
