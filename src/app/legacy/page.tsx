import Link from "next/link";
import "./legacy.css";

export default function LegacyPage() {
  return (
    <main className="legacy-page">
      <header className="legacy-header">
        <Link
          href="/"
          className="legacy-brand"
          aria-label="Return to TWNTY4 home"
        >
          <span className="legacy-brand-number">24</span>

          <span className="legacy-brand-word">
            TWNTY4
          </span>

          <small>Studio</small>
        </Link>

        <nav
          className="legacy-navigation"
          aria-label="Legacy navigation"
        >
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/collections/second-project">
            Second Project
          </Link>
        </nav>

        <Link href="/" className="legacy-close">
          Close
        </Link>
      </header>

      <section className="legacy-hero">
        <div className="legacy-hero-glow" />

        <div className="legacy-hero-content">
          <p className="legacy-kicker">
            The story of TWNTY4
          </p>

          <h1>Legacy</h1>

          <p className="legacy-hero-intro">
            A vision shaped by ambition, experience and
            the belief that clothing can represent
            something greater.
          </p>
        </div>

        <div className="legacy-scroll-note">
          <span>Discover the story</span>
          <i />
        </div>
      </section>

      <article className="legacy-story">
        <aside className="legacy-story-side">
          <span>Turin, Italy</span>
          <span>Established with intention</span>
        </aside>

        <div className="legacy-story-content">
          <p className="legacy-opening">
            TWNTY4 began with the ambition of a young
            entrepreneur who believed clothing could
            represent more than style.
          </p>

          <p>
            Born in Turin and shaped by a passion for
            business, sport, travel and timeless elegance,
            the vision evolved through new experiences—
            including time spent studying in Oxford—where
            the idea grew into something greater than
            fashion.
          </p>

          <blockquote>
            Clothing should not simply be worn. It should
            reflect direction, discipline and purpose.
          </blockquote>

          <p>
            TWNTY4 was conceived as a representation of
            quiet ambition: a brand for those who continue
            to pursue more while remaining defined by
            restraint, precision and confidence.
          </p>

          <p>
            Every collection begins with intention. Every
            silhouette, material and detail is considered
            before it becomes part of the TWNTY4 world.
            Nothing is released simply to fill a season.
            Each piece must earn its place.
          </p>

          <p>
            The brand is still at the beginning of its
            journey, but its direction is clear: to build
            something lasting, shaped by experience and
            created for people who see success not as
            something displayed, but as something built.
          </p>
        </div>
      </article>

      <section className="legacy-manifesto">
        <span className="legacy-manifesto-label">
          The TWNTY4 Philosophy
        </span>

        <div className="legacy-manifesto-lines">
          <p>Ambition without excess.</p>
          <p>Elegance without compromise.</p>
          <p>Confidence without noise.</p>
        </div>
      </section>

      <section className="legacy-closing">
        <div className="legacy-closing-mark">
          <span>24</span>
          <strong>TWNTY4</strong>
          <small>Studio</small>
        </div>

        <p className="legacy-closing-statement">
          Success isn&apos;t worn.
          <br />
          It&apos;s built.
        </p>

        <Link
          href="/collections"
          className="legacy-explore"
        >
          <span>Discover what comes next</span>
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <footer className="legacy-footer">
        <span>© TWNTY4 Studio</span>
        <span>Turin, Italy</span>

        <a
          href="https://instagram.com/twnty4studio"
          target="_blank"
          rel="noreferrer"
        >
          @TWNTY4STUDIO
        </a>
      </footer>
    </main>
  );
}
