import Link from "next/link";
import "../simple-page.css";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() || "";

  return (
    <main className="simple-page">
      <Link className="simple-logo" href="/">
        TWNTY4
      </Link>

      <div>
        <p>Search</p>

        <h1>
          {query
            ? `Results for “${query}”`
            : "Search TWNTY4"}
        </h1>

        <p className="simple-description">
          Product search will activate when the store catalogue
          is connected.
        </p>

        <Link className="simple-link" href="/collections">
          Explore the collection →
        </Link>
      </div>
    </main>
  );
}
