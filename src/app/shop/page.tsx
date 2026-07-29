import Link from "next/link";
import "../simple-page.css";

export default function ShopPage() {
  return (
    <main className="simple-page">
      <Link className="simple-logo" href="/">
        TWNTY4
      </Link>

      <div>
        <p>Shop</p>
        <h1>The store is being curated.</h1>

        <Link className="simple-link" href="/collections">
          Explore the collection →
        </Link>
      </div>
    </main>
  );
}
