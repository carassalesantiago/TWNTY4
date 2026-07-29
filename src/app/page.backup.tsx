export default function Home() {
  return (
    <main className="home" id="home">
      <section className="hero">
        <div className="background-vignette" />
        <div className="wall-texture" />
        <div className="light-beam" />
        <div className="light-pool" />
        <div className="floor" />

        <header className="header">
          <nav className="nav nav-left" aria-label="Main navigation">
            <a href="#shop">Shop</a>
            <a href="#collections">Collections</a>
            <a href="#studio">Studio</a>
            <a href="#journal">Journal</a>
          </nav>

          <a className="header-logo" href="#home" aria-label="TWNTY4 home">
            <span className="header-logo-number">24</span>
            <span className="header-logo-name">TWNTY4</span>
            <span className="header-logo-studio">Studio</span>
          </a>

          <nav className="nav nav-right" aria-label="Store navigation">
            <button type="button">Search</button>
            <a href="#cart">Cart (0)</a>

            <button
              className="menu-button"
              type="button"
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </header>

        <div className="hero-content">
          <div className="brand-mark">
            <span className="brand-number">24</span>

            <h1>TWNTY4</h1>

            <p className="brand-studio">Studio</p>
          </div>

          <span className="brand-divider" />

          <div className="brand-pillars">
            <span>Sports</span>
            <b>•</b>
            <span>Travel</span>
            <b>•</b>
            <span>Fun</span>
            <b>•</b>
            <span>Purpose</span>
          </div>

          <p className="brand-message">
            Built for those who pursue more.
          </p>

          <a className="discover-button" href="#collections">
            <span>Discover our pieces of art</span>
            <span className="button-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <footer className="footer">
          <div className="footer-group footer-left">
            <a
              className="instagram-link"
              href="https://instagram.com/twnty4studio"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.4" cy="6.6" r="0.9" className="dot" />
              </svg>

              <span>@TWNTY4STUDIO</span>
            </a>

            <span className="footer-line" />

            <a href="mailto:twnty4brand@gmail.com">
              TWNTY4BRAND@GMAIL.COM
            </a>
          </div>

          <div className="footer-group footer-right">
            <span className="location">
              Turin, Italy <span className="flag">🇮🇹</span>
            </span>

            <span className="footer-line" />

            <span>© TWNTY4 Studio</span>
          </div>
        </footer>
      </section>

      <section id="collections" className="placeholder-section">
        <p>Collections</p>
        <h2>Coming next.</h2>
      </section>
    </main>
  );
}
