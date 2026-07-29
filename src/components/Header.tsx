"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <button
        className="menu-button"
        type="button"
        aria-label="Open menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>

      <nav className={menuOpen ? "main-nav open" : "main-nav"}>
        <a href="#collections" onClick={() => setMenuOpen(false)}>
          Collections
        </a>

        <a href="/legacy" onClick={() => setMenuOpen(false)}>
          Legacy
        </a>

        <a href="#journal" onClick={() => setMenuOpen(false)}>
          Journal
        </a>
      </nav>

      <a className="logo" href="#top" aria-label="TWNTY4 home">
        TWNTY4
      </a>

      <div className="header-actions">
        <button type="button">Search</button>

        <button type="button">
          Bag <span>0</span>
        </button>
      </div>
    </header>
  );
}
