import Link from "next/link";
import "../simple-page.css";

export default function CartPage() {
  return (
    <main className="simple-page">
      <Link className="simple-logo" href="/">
        TWNTY4
      </Link>

      <div>
        <p>Cart</p>
        <h1>Your cart is currently empty.</h1>

        <Link className="simple-link" href="/collections">
          Continue exploring →
        </Link>
      </div>
    </main>
  );
}
