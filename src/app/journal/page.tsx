import Link from "next/link";
import "../simple-page.css";

export default function JournalPage() {
  return (
    <main className="simple-page">
      <Link className="simple-logo" href="/">
        TWNTY4
      </Link>

      <div>
        <p>Journal</p>
        <h1>Stories for those who pursue more.</h1>

        <Link className="simple-link" href="/collections">
          View the collection →
        </Link>
      </div>
    </main>
  );
}
