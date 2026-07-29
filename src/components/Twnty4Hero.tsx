"use client";

import { useEffect, useState } from "react";

export default function Twnty4Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen || searchOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  function closeOverlays() {
    setMenuOpen(false);
    setSearchOpen(false);
  }

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-wall" />
        <div className="hero-vignette" />
        <div className="hero-beam" />
        <div className="hero-beam-dust" />
        <div className="hero-floor" />
        <div className="hero-floor-light" />

        <header className="header">
          <nav className="nav nav-left" aria-label="Main navigation">
            <a href="/shop">Shop</a>
            <a href="/collections">Collections</a>
            <a href="#studio">Legacy</a>
            <a href="/journal">Journal</a>
          </nav>

          <a className="mini-logo" href="#home" aria-label="TWNTY4 home">
            <span className="mini-logo-number">24</span>
            <span className="mini-logo-name">TWNTY4</span>
            <span className="mini-logo-studio">Studio</span>
          </a>

          <nav className="nav nav-right" aria-label="Store navigation">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
            >
              Search
            </button>

            <a href="/cart">Cart (0)</a>

            <button
              className="hamburger"
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </header>

        <div className="hero-content">
          <div className="hero-logo" aria-label="TWNTY4 Studio">
            <span className="hero-number">24</span>
            <h1>TWNTY4</h1>
            <p>Studio</p>
          </div>

          <span className="hero-divider" />

          

          <p className="hero-slogan">
            Built for those who pursue more.
          </p>

          <a className="discover" href="/collections">
            <span>Explore the Collection</span>
            <span className="discover-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <footer className="hero-footer">
          <div className="footer-side footer-left">
            <a
              className="instagram"
              href="https://instagram.com/twnty4studio"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle className="instagram-dot" cx="17.5" cy="6.5" r="1" />
              </svg>

              <span>@TWNTY4STUDIO</span>
            </a>

            <span className="footer-separator" />

            <a href="mailto:twnty4brand@gmail.com">
              TWNTY4BRAND@GMAIL.COM
            </a>
          </div>

          <div className="footer-side footer-right">
            <span className="location">
              Turin, Italy
              <span className="italian-flag" aria-label="Italian flag">
                <i />
                <i />
                <i />
              </span>
            </span>

            <span className="footer-separator" />

            <span>© TWNTY4 Studio</span>
          </div>
        </footer>
      </section>

      <div
        className={`overlay ${menuOpen ? "overlay-visible" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="overlay-close"
          type="button"
          onClick={closeOverlays}
          aria-label="Close menu"
        >
          <span />
          <span />
        </button>

        <nav className="overlay-menu" aria-label="Full menu">
          <a href="/shop" onClick={closeOverlays}>
            <small>01</small>
            Shop
          </a>

          <a href="/collections" onClick={closeOverlays}>
            <small>02</small>
            Collections
          </a>

          <button
            type="button"
            aria-disabled="true"
            title="Legacy — coming soon"
          >
            <small>03</small>
            Legacy
          </button>

          <a href="/journal" onClick={closeOverlays}>
            <small>04</small>
            Journal
          </a>
        </nav>
      </div>

      <div
        className={`search-overlay ${
          searchOpen ? "overlay-visible" : ""
        }`}
        aria-hidden={!searchOpen}
      >
        <button
          className="overlay-close"
          type="button"
          onClick={closeOverlays}
          aria-label="Close search"
        >
          <span />
          <span />
        </button>

        <form
          className="search-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="site-search">Search TWNTY4</label>

          <div>
            <input
              id="site-search"
              type="search"
              autoComplete="off"
              placeholder="What are you looking for?"
            />

            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </>
  );
}
